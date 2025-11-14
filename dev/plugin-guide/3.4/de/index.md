---
title: Plugin Guide for OJS and OMP
description: Learn how to create a plugin for Open Journal Systems and Open Monograph Press, to customize almost anything about the application to suit your needs.
---

# Einführung

Dieses Dokument beschreibt wie du ein eigenes Plugin für OJS und OMP erstellst. Es ist für Softwareentwickler geschrieben, die ihre OJS/Omp-Installation erweitern wollen, um sie an ihre individuellen Bedürfnisse anzupassen.

## Was sind Plugins?

Plugins können mithilfe von "Hooks" zu bestimmten Ereignissen oder Zeitpunkten zusätzlichen Code ausführen und dadurch weitere Funktionen zur Anwendung hinzufügen. Plugins können Felder zu Formularen hinzufügen, Templates verändern, Daten abspeichern und verarbeiten, den Authentifizierungsprozess modifizieren, neue Seiten erstellen oder die bestehende Benutzeroberfläche in der Anwendung verändern.

> Wenn du ein neues Design für dein Journal oder Ihre Presse erstellen möchtest, konsultiere bitte den [Theming Guide](/pkp-theming-guide/en). 
> 
> {:.notice}

Plugins halten deine Anpassungen vom Rest des Programmcodes getrennt. Wenn du ein Update von OJS/OMP machst, wird dein Plugin-Code nicht verändert. Das erleichtert die Wartung deiner Anpassungen auch über längere Zeiträume.

Wir **empfehlen nachdrücklich** ausschließlich Plugins zu benutzen, um die Software zu erweitern und niemals den Hauptprogrammcode zu verändern.

---

Erfahre mehr darüber wie du [dein eigenes Plugin schreibst](getting-started).
