---
book: dev-documentation
version: 3.5
title: Migrations - Technical Documentation - OJS|OMP|OPS
---

# Migrations

[Laravel Migrations](https://laravel.com/docs/11.x/migrations) can be used to update the database or uploaded files during an upgrade. The most common use of a migration is to modify the database schema from version to version.

## Create a Migration

Create a new class for each migration and name it after the issue it is related to.

```php
namespace PKP\migration\upgrade\v3_4_0;

class I7265_EditorialDecisions extends \PKP\migration\Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Allow null values in two columns of the `edit_decisons` table
        Schema::table('edit_decisions', function (Blueprint $table) {
            $table->bigInteger('review_round_id')->nullable()->change();
            $table->bigInteger('round')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Force null values when reversing the migration,
        // to set the database back to its original state
        Schema::table('edit_decisions', function (Blueprint $table) {
            $table->bigInteger('review_round_id')->nullable(false)->change();
            $table->bigInteger('round')->nullable(false)->change();
        });
    }
}
```

## Add migration to upgrade commands

Once the migration has been created, add it to the `dbscripts/xml/upgrade.xml` for each application where the migration should be run.

The XML file is organized by version descriptors like the following.

```xml
<upgrade minversion="3.1.0.0" maxversion="3.3.9.9">
    ...
    <migration class="PKP\migration\upgrade\v3_4_0\I7265_EditorialDecisions" />
    ...
</upgrade>
```

Add your migration to the `<upgrade>` block that matches the `maxversion` _before_ the migration should be run. For example, if the migration should be applied when upgrading to 3.4, add it to the end of the block with `maxversion="3.3.9.9"`, right before the `<note>` line.

```xml
<upgrade minversion="3.1.0.0" maxversion="3.3.9.9">
    ...
    <migration class="PKP\migration\upgrade\v3_4_0\I7265_EditorialDecisions" />
    <note file="docs/release-notes/README-3.4.0" />
</upgrade>
```

## Sharing code across applications

Sometimes a migration is nearly identical across all applications, except for a few differences. For example, the table for a context is called `journals`, `presses`, or `servers`, depending on the application.

Use an abstract class in the `lib/pkp` library.

```php
<?php
namespace PKP\migration\upgrade\v3_4_0;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use PKP\migration\Migration;

abstract class I5555_Example extends Migration
{
    abstract protected function getContextTable(): string;
    abstract protected function getContextSettingsTable(): string;
    abstract protected function getContextIdColumn(): string;

    public function up(): void
    {
        Schema::table($this->getContextTable(), function (Blueprint $table) {
            //
        });
    }
}
```

Extend that class in the `APP` namespace and implement the required methods.

```php
<?php
namespace APP\migration\upgrade\v3_4_0;

class I5555_Example extends \PKP\migration\upgrade\v3_4_0\I5555_Example
{
    protected function getContextTable(): string
    {
        return 'journals';
    }

    protected function getContextSettingsTable(): string
    {
        return 'journal_settings';
    }

    protected function getContextIdColumn(): string
    {
        return 'journal_id';
    }
}
```

Then add the child class to the `upgrade.xml` file.

```xml
<upgrade minversion="3.1.0.0" maxversion="3.3.9.9">
    ...
    <migration class="APP\migration\upgrade\v3_4_0\I5555_Example" />
    <note file="docs/release-notes/README-3.4.0" />
</upgrade>
```

## Downgrades

The `down()` method should be implemented to support downgrades. When that is not possible, use the `DowngradeNotSupportedException`.

```php
public function down(): void
{
    throw new DowngradeNotSupportedException('Downgrade unsupported, you will need to restore from backup');
}
```

## Never rely on application code

Migrations should never rely on Repositories, DAOs, or other application code. Always write the migrations as isolated calls to the database or files.

```php
// DON'T DO THIS
$submissionTable = Repo::submissions()->dao->table;

// DO THIS
$submissionsTable = 'submissions';
```

That's because a Migration for one version may be run in another version's code base. For example, when upgrading from 3.3 to 3.5, a migration for 3.4 will be run in the code for 3.5. If the submissions table was changed to `all_submissions` in 3.5, the value of `$submissionsTable` would change and our migration would fail.

## Preflight Checks

Every upgrade will have a `PreflightCheckMigration`. This should be the first migration listed in the `upgrade.xml` file. Use the `up()` method of this migration to catch potential migration errors before any modifications are made.

```php
public function up(): void
{
    try {
        // Check that a foreign key exists before it is
        // added to the tables
        $count = DB::table('...')
            ->whereNull('id')
            ->count();
        if ($count) {
            throw new Exception('One or more items are missing an id. You must remove these items before upgrading.');
        }
    } catch (Throwable $e) {
        $this->_installer->log('A pre-flight check failed.);
        throw $e;
    }
}
```
