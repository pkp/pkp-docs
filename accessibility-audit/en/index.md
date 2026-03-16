---
generateHeadingToc: true
---

# PKP Docs Accessibility Audit — Metrics Report

## Overview

This report summarises the accessibility audit work carried out on the PKP Docs website ([docs.pkp.sfu.ca](https://docs.pkp.sfu.ca)). The audit identified and remediated accessibility barriers across the site's templates, styles, and content files. All work is tracked through GitHub issues labelled **A11Y** and linked pull requests (PRs).

---

## Summary Metrics

| Metric | Count |
|---|---|
| Issues audited | 14 |
| Pull requests filed | 12 |
| Pull requests merged | 11 |
| Pull requests open | 1 |
| Total commits | 26 |
| Total files changed | 84 |
| Total lines added | 222 |
| Total lines removed | 124 |

---

## Pull Requests Filed

| PR | Title | Issues Addressed | Status | Commits | Files Changed | Lines Added | Lines Removed |
|---|---|---|---|---|---|---|---|
| [#1374](https://github.com/pkp/pkp-docs/pull/1374) | A11Y – Footer links and text with low contrast ratio | [#1362](https://github.com/pkp/pkp-docs/issues/1362), [#1400](https://github.com/pkp/pkp-docs/issues/1400) | Merged | 1 | 2 | 10 | 8 |
| [#1377](https://github.com/pkp/pkp-docs/pull/1377) | A11Y – H1 should be unique on each page | [#1364](https://github.com/pkp/pkp-docs/issues/1364) | Merged | 1 | 7 | 7 | 7 |
| [#1378](https://github.com/pkp/pkp-docs/pull/1378) | A11Y – Normalize SUMMARY heading label for ToC | [#1376](https://github.com/pkp/pkp-docs/issues/1376) | Merged | 1 | 47 | 47 | 47 |
| [#1379](https://github.com/pkp/pkp-docs/pull/1379) | A11Y – Homepage Jump to menu missing navigation structure and aria label | [#1366](https://github.com/pkp/pkp-docs/issues/1366) | Merged | 2 | 2 | 23 | 4 |
| [#1387](https://github.com/pkp/pkp-docs/pull/1387) | A11Y – Search component missing description text | [#1367](https://github.com/pkp/pkp-docs/issues/1367) | Merged | 3 | 3 | 3 | 0 |
| [#1396](https://github.com/pkp/pkp-docs/pull/1396) | A11Y – Heading level 1 missing in the homepage | [#1388](https://github.com/pkp/pkp-docs/issues/1388) | Merged | 3 | 1 | 1 | 0 |
| [#1409](https://github.com/pkp/pkp-docs/pull/1409) | A11Y – Footer uses nav tag incorrectly | [#1398](https://github.com/pkp/pkp-docs/issues/1398), [#1399](https://github.com/pkp/pkp-docs/issues/1399) | Merged | 2 | 4 | 39 | 25 |
| [#1410](https://github.com/pkp/pkp-docs/pull/1410) | A11Y – OJS Versions navigation at the top | [#1368](https://github.com/pkp/pkp-docs/issues/1368) | Merged | 2 | 3 | 43 | 9 |
| [#1412](https://github.com/pkp/pkp-docs/pull/1412) | A11Y – Footer logo image alt text and link | [#1401](https://github.com/pkp/pkp-docs/issues/1401) | Merged | 1 | 1 | 2 | 2 |
| [#1414](https://github.com/pkp/pkp-docs/pull/1414) | A11Y – Creative Commons license link and label | [#1413](https://github.com/pkp/pkp-docs/issues/1413) | Merged | 2 | 1 | 1 | 1 |
| [#1416](https://github.com/pkp/pkp-docs/pull/1416) | A11Y – All content must be contained in landmarks | [#1365](https://github.com/pkp/pkp-docs/issues/1365) | Merged | 2 | 8 | 19 | 15 |
| [#1445](https://github.com/pkp/pkp-docs/pull/1445) | A11Y – Skip to content component missing | [#1363](https://github.com/pkp/pkp-docs/issues/1363) | Open | 6 | 5 | 27 | 6 |
| **Totals** | | | | **26** | **84** | **222** | **124** |

---

## Issues and WCAG Success Criteria

The table below maps each issue to the WCAG 2.1 success criteria it addresses. Criteria are listed with their level (A, AA, or AAA).

| Issue | Title | Status | PR | WCAG Success Criteria | Level |
|---|---|---|---|---|---|
| [#1362](https://github.com/pkp/pkp-docs/issues/1362) | Footer links and text with low contrast ratio | Closed | [#1374](https://github.com/pkp/pkp-docs/pull/1374) | 1.4.3 Contrast (Minimum) | AA |
| [#1363](https://github.com/pkp/pkp-docs/issues/1363) | Skip to content component missing | Open | [#1445](https://github.com/pkp/pkp-docs/pull/1445) | 2.4.1 Bypass Blocks | A |
| [#1364](https://github.com/pkp/pkp-docs/issues/1364) | Heading level 1 (H1) should be unique on each page | Closed | [#1377](https://github.com/pkp/pkp-docs/pull/1377) | 1.3.1 Info and Relationships | A |
| | | | | 2.4.6 Headings and Labels | AA |
| [#1365](https://github.com/pkp/pkp-docs/issues/1365) | All content must be contained in landmarks | Closed | [#1416](https://github.com/pkp/pkp-docs/pull/1416) | 1.3.1 Info and Relationships | A |
| | | | | 4.1.2 Name, Role, Value | A |
| | | | | 1.3.6 Identify Purpose | AAA |
| [#1366](https://github.com/pkp/pkp-docs/issues/1366) | Homepage Jump to menu missing navigation structure and landmark label | Closed | [#1379](https://github.com/pkp/pkp-docs/pull/1379) | 1.3.1 Info and Relationships | A |
| | | | | 2.4.1 Bypass Blocks | A |
| | | | | 4.1.2 Name, Role, Value | A |
| [#1367](https://github.com/pkp/pkp-docs/issues/1367) | Search component missing description text (aria-label) | Closed | [#1387](https://github.com/pkp/pkp-docs/pull/1387) | 1.3.1 Info and Relationships | A |
| | | | | 4.1.2 Name, Role, Value | A |
| [#1368](https://github.com/pkp/pkp-docs/issues/1368) | OJS Versions navigation missing semantic markup | Closed | [#1410](https://github.com/pkp/pkp-docs/pull/1410) | 1.3.1 Info and Relationships | A |
| | | | | 4.1.2 Name, Role, Value | A |
| [#1376](https://github.com/pkp/pkp-docs/issues/1376) | Normalize SUMMARY.md heading label for Table of Contents | Closed | [#1378](https://github.com/pkp/pkp-docs/pull/1378) | 1.3.1 Info and Relationships | A |
| | | | | 2.4.6 Headings and Labels | AA |
| [#1388](https://github.com/pkp/pkp-docs/issues/1388) | Heading level 1 missing in the homepage | Closed | [#1396](https://github.com/pkp/pkp-docs/pull/1396) | 1.3.1 Info and Relationships | A |
| | | | | 2.4.6 Headings and Labels | AA |
| [#1398](https://github.com/pkp/pkp-docs/issues/1398) | Footer uses nav tag incorrectly, creating unlabelled landmark region | Closed | [#1409](https://github.com/pkp/pkp-docs/pull/1409) | 1.3.1 Info and Relationships | A |
| | | | | 4.1.2 Name, Role, Value | A |
| [#1399](https://github.com/pkp/pkp-docs/issues/1399) | Missing heading markup for footer section titles | Closed | [#1409](https://github.com/pkp/pkp-docs/pull/1409) | 1.3.1 Info and Relationships | A |
| | | | | 2.4.6 Headings and Labels | AA |
| [#1400](https://github.com/pkp/pkp-docs/issues/1400) | Footer links have low contrast ratio and inconsistent hover/active states | Closed | [#1374](https://github.com/pkp/pkp-docs/pull/1374) | 1.4.3 Contrast (Minimum) | AA |
| | | | | 1.4.11 Non-text Contrast | AA |
| [#1401](https://github.com/pkp/pkp-docs/issues/1401) | Footer logo image alt text and link improvements | Closed | [#1412](https://github.com/pkp/pkp-docs/pull/1412) | 1.1.1 Non-text Content | A |
| | | | | 2.4.4 Link Purpose (In Context) | A |
| [#1413](https://github.com/pkp/pkp-docs/issues/1413) | Creative Commons license link and label in footer | Closed | [#1414](https://github.com/pkp/pkp-docs/pull/1414) | 2.4.4 Link Purpose (In Context) | A |
| | | | | 4.1.2 Name, Role, Value | A |

---

## WCAG Success Criteria Affected

The following WCAG 2.1 success criteria were addressed across the audit:

| WCAG Criterion | Description | Level | Issues Addressed |
|---|---|---|---|
| 1.1.1 Non-text Content | Provide text alternatives for non-text content | A | [#1401](https://github.com/pkp/pkp-docs/issues/1401) |
| 1.3.1 Info and Relationships | Information conveyed through presentation can be programmatically determined | A | [#1364](https://github.com/pkp/pkp-docs/issues/1364), [#1365](https://github.com/pkp/pkp-docs/issues/1365), [#1366](https://github.com/pkp/pkp-docs/issues/1366), [#1367](https://github.com/pkp/pkp-docs/issues/1367), [#1368](https://github.com/pkp/pkp-docs/issues/1368), [#1376](https://github.com/pkp/pkp-docs/issues/1376), [#1388](https://github.com/pkp/pkp-docs/issues/1388), [#1398](https://github.com/pkp/pkp-docs/issues/1398), [#1399](https://github.com/pkp/pkp-docs/issues/1399) |
| 1.3.6 Identify Purpose | Purpose of UI components and regions can be programmatically determined | AAA | [#1365](https://github.com/pkp/pkp-docs/issues/1365) |
| 1.4.3 Contrast (Minimum) | Text has a contrast ratio of at least 4.5:1 | AA | [#1362](https://github.com/pkp/pkp-docs/issues/1362), [#1400](https://github.com/pkp/pkp-docs/issues/1400) |
| 1.4.11 Non-text Contrast | UI components have a contrast ratio of at least 3:1 | AA | [#1400](https://github.com/pkp/pkp-docs/issues/1400) |
| 2.4.1 Bypass Blocks | Mechanism to bypass blocks of content repeated on multiple pages | A | [#1363](https://github.com/pkp/pkp-docs/issues/1363), [#1366](https://github.com/pkp/pkp-docs/issues/1366) |
| 2.4.4 Link Purpose (In Context) | Purpose of each link can be determined from the link text or context | A | [#1401](https://github.com/pkp/pkp-docs/issues/1401), [#1413](https://github.com/pkp/pkp-docs/issues/1413) |
| 2.4.6 Headings and Labels | Headings and labels describe topic or purpose | AA | [#1364](https://github.com/pkp/pkp-docs/issues/1364), [#1376](https://github.com/pkp/pkp-docs/issues/1376), [#1388](https://github.com/pkp/pkp-docs/issues/1388), [#1399](https://github.com/pkp/pkp-docs/issues/1399) |
| 4.1.2 Name, Role, Value | Accessible name, role, and value for all UI components | A | [#1365](https://github.com/pkp/pkp-docs/issues/1365), [#1366](https://github.com/pkp/pkp-docs/issues/1366), [#1367](https://github.com/pkp/pkp-docs/issues/1367), [#1368](https://github.com/pkp/pkp-docs/issues/1368), [#1398](https://github.com/pkp/pkp-docs/issues/1398), [#1413](https://github.com/pkp/pkp-docs/issues/1413) |

### Criteria by Level

| Level | Criteria Count | WCAG Criteria |
|---|---|---|
| A | 5 | 1.1.1, 1.3.1, 2.4.1, 2.4.4, 4.1.2 |
| AA | 3 | 1.4.3, 1.4.11, 2.4.6 |
| AAA | 1 | 1.3.6 |
| **Total** | **9** | |

---

## Issue Status Summary

| Status | Count | Issues |
|---|---|---|
| Closed | 13 | #1362, #1364, #1365, #1366, #1367, #1368, #1376, #1388, #1398, #1399, #1400, #1401, #1413 |
| Open | 1 | #1363 |
