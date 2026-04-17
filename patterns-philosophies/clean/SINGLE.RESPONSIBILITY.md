## The Single Responsibility Principle

![Reprimanding Child](/.attachments/reprimanding.child.jpg)

---

**“A module should have one, and only one, reason to change.”**

A class or function should focus on one responsibility—one axis of change.

---

## Symptom 1 - Accidental Duplication

**Description**
When a module handles multiple responsibilities (e.g., data formatting, saving, displaying), the same logic ends up copied in other places that also need one of those responsibilities.

**Bad Example**

```cpp
class Report {
public:
    void generate();
    void format();      // formatting logic
    void saveToDisk();  // file system logic
};
```

This design leads to code duplication when other classes also need to format or save content.

---

## Symptom 2 - Merges That Shouldn't Happen

**Description**
When multiple developers edit unrelated concerns in the same file (e.g., formatting vs. saving), they step on each other’s changes, causing unnecessary merge conflicts.

---

## Solution - Separate Responsibilities

Break up the class into smaller modules, each focused on a single concern.

**Good Example**

```cpp
class ReportContent {
public:
    std::string generate();
};

class ReportFormatter {
public:
    std::string format(const std::string& content);
};

class ReportSaver {
public:
    void save(const std::string& formattedContent, const std::string& path);
};
```

**Usage**

```cpp
ReportContent contentGen;
std::string content = contentGen.generate();

ReportFormatter formatter;
std::string formatted = formatter.format(content);

ReportSaver saver;
saver.save(formatted, "report.txt");
```

Now:

* `ReportContent` changes only if report logic changes
* `ReportFormatter` changes only if formatting rules change
* `ReportSaver` changes only if file-saving logic changes

This isolation prevents duplication and minimizes coordination between developers.

---

## 🧠 Summary Quote

> **"Gather together the things that change for the same reasons. Separate those that change for different reasons."**
> — *Robert C. Martin*
