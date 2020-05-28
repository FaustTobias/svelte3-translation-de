---
title: Grundlagen
---

Willkommen im Svelte Tutorial. Hier wird dir alles erklärt, was du wissen musst, um einfach schnelle und kleine Web Applikationen zu erstellen.

Du kannst dir auch die [API Dokumentation](docs) und die [Beispiele](examples), oder — wenn du wirklich sofort loslegen möchtest — den [60 Sekunden Quickstart Guide](blog/the-easiest-way-to-get-started) ansehen.


## Was ist Svelte?

Svelte ist ein Tool um schnelle Web Applikationen zu erstellen.

Es ist ähnlich wie JavaScript Frameworks wie React und Vue, welche das gemeinsames Ziel verfolgen, die Entwicklung eines professionellen interaktiven Benutzerinterface möglichst einfach zu gestalten.

Aber es gibt einen entscheidenden Unterschied: Svelte konvertiert deine App zur *Bauzeit* in kleines JavaScript, statt deinen Code zur *Laufzeit* zu interpretieren. Das bedeutet, dass du nicht für die Performanceeinbußen der Frameworkabstraktionen zahlen musst, und deine Applikation lädt schnell.

Du kannst deine ganze Applikation mit Svelte bauen, oder es inkrementell zu einer bestehenden Codebasis hinzufügen. Du kannst Komponenten als eigenständige Packages bereitstellen, die überall funktioneren, ohne dabei den Overhead einer Abhängigkeit zu einem konventionellen Framework zu haben.


## Wie du dieses Tutorial nutzen kannst

Du solltest ein grundlegendes Verständnis mit HTML, CSS und JavaScript mitbringen, um Svelte zu verstehen.

Während du durch das Tutorial fortschreitest, werden dir kleine Mini-Übungen angezeigt, die neue Features vorstellen. Spätere Kapitel bauen auf dem Wissen, dass du dir in früheren Kapiteln aneignest, auf. Du solltest das Tutorial also von Anfang bis Ende durcharbeiten. Wenn benötigt kannst du auch über das obige Dropdown navigieren (drücke dazu auf 'Einführung / Grundlagen').

Jedes Tutorial Kaptiel wird einen "Zeig es mir" Button besitzen. Diesen kannst du drücken, wenn dir die Anweisungen nicht klar sind. Versuche aber bitte nicht, zu sehr darauf zu bestehen; Du wirst schneller lernen, wenn du selbst herausfindest, wo der gezeigte Code eingesetzt werden muss und wenn du den Code selbst eintippst.


## Komponenten verstehen

In Svelte setzt sich eine Applikation über mehrere *Komponenten* zusamme. Eine Komponente ist ein wieder-verwendbarer, in sich geschlossener Block an Code, der HTML CSS und JavaScript enthält, das zusammen gehört und in einer `.svelte` Datei gespeichert wird. Das 'hallo welt' Beispiel im Code Editor ist eine einfache Komponente.
