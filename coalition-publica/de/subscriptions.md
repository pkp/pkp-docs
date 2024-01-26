- - -
noindex: true
- - -
# Abonnements und Nutzung von OJS ohne Veröffentlichung

Wenn Sie OJS verwenden, um Inhalte zu veröffentlichen, die ein Abonnement erfordern, oder wenn Sie OJS für Ihren Workflow verwenden, aber nicht veröffentlichen, dann sind einige zusätzliche Konfiguration erforderlich, damit Érudit auf Ihre Inhalte zugreifen kann. **Diese Schritte sind nicht erforderlich, wenn Sie OJS verwenden, um ein offenes Zugriffsjournal zu veröffentlichen.**

Sie müssen **OJS [Long-Term Support](https://pkp.sfu.ca/software/ojs/download/) oder neuere** verwenden.

## Seitenadministrator Schritte

Die folgenden Schritte können von Benutzern mit der Seiten- oder der Journaladministrator Rolle, **sobald** ein Systemadministrator den Schritten in diesem Dokument gefolgt ist, ausgeübt werden. Stellen Sie sicher, dass Sie einen API-Schlüssel Geheimnis</em> eingegeben haben.

### Schritt 1. Einen Abonnement-Manager erstellen

In diesem Schritt erstellen Sie einen neuen Benutzer mit einer Abonnementmanager-Rolle. Wenn Sie bereits einen Abonnement-Manager haben, können Sie diesen Schritt überspringen und stattdessen diesen Account verwenden. Aus Sicherheitsgründen wird nicht empfohlen, ein Konto mit Rollen außer dem Abonnement-Manager zu verwenden (es ist besser, eine einzige Rolle für dieses Konto zu haben). Später erteilen Sie Érudit die Berechtigung, diesen Benutzer zu verwenden, wenn Sie Inhalte von Ihrer Installation sammeln, indem Sie das API-Schlüsselgeheimnis zur Verfügung stellen, das diesem Benutzerkonto zugeordnet ist.

Als Journal Manager oder Seitenadministrator gehen Sie zu den Benutzern & Rollen > Benutzer. Verwenden Sie den Link „Benutzer hinzufügen“, um ein neues Benutzerkonto zu erstellen.

Füllen Sie das Formular aus und drücken Sie "Speichern". Während wir empfehlen, legitime Kontaktdaten für Ihr Journal zu verwenden, spielt es keine Rolle, welche Benutzerdetails Sie verwenden, solange die erforderlichen Formularfelder ausgefüllt sind und Sie sich den Benutzernamen und das Passwort für den nächsten Schritt merken können.

Als nächstes wird Ihnen eine Liste von Benutzerrollen angezeigt. Stellen Sie sicher, dass Sie den "Abonnement-Manager" auswählen. Drücken Sie „Speichern“, um den Benutzererstellungsprozess abzuschließen.

Dies wird den Benutzererstellungsprozess abschließen. Bitte merken Sie sich den Benutzernamen und das Passwort, die Sie bei der Erstellung des Kontos eingegeben haben.

### Schritt 2. API-Schlüssel erzeugen

Loggen Sie sich aus Ihrer OJS-Installation ab und melden Sie sich dann mit den Anmeldedaten für das in Schritt 1 erstellte Konto an.

Navigieren Sie zu Ihrem Benutzerprofil (typischerweise in der oberen rechten Ecke).

Den "API-Schlüssel" Tab öffnen:

![Profilmenü mit der Registerkarte API-Schlüssel ausgewählt, welche die Optionen hat, um den API-Zugriff zu aktivieren oder einen neuen API-Schlüssel zu generieren.](./assets/apiKey.png)

Möglicherweise gibt es bereits Inhalte im „API-Schlüssel“-Feld. Wenn dem so ist, dann ignorieren.

Verwenden Sie dieses Formular, um folgendes auszuführen:

1. Aktivieren Sie das Kontrollkästchen „Externe Anwendungen mit dem API-Schlüssel aktivieren, um auf dieses Konto zuzugreifen“.
2. Aktivieren Sie das Kontrollkästchen „Neuen API-Schlüssel generieren“.
3. Drücken Sie den Button „Speichern“.
4. Deaktivieren Sie das Kontrollkästchen „Neuen API-Schlüssel generieren“.
5. Drücken Sie den Button „Speichern“.

Damit sollte das „API-Schlüssel“-Feld eine lange Zeichenkette bestehend aus Zahlen und Buchstaben enthalten. Mit diesem Schlüssel kann Érudit Aktionen mit dem neu erstellten Benutzer ausführen und blockierte oder unveröffentlichte Inhalte herunterladen. Kopieren Sie dies in Ihre Zwischenablage und senden Sie es per E-Mail an Ihren Coalition Publica Kontakt. **Bitte stellen Sie sicher, dass das Kontrollkästchen “Neuen API-Schlüssel generieren” deaktiviert ist, um zu verhindern, dass der Schlüssel, den Sie mit der Koalition Publica teilen, versehentlich überschrieben wird.**
