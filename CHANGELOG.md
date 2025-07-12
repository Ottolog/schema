# 📄 CHANGELOG

All notable changes to the Ottolog Certificate Schema will be documented in this
file.

This project adheres to [Semantic Versioning](https://semver.org/).

---

## \[v1.0.0] — 2025-06-28

### Added

-   Initial release of the Ottolog Certificate Schema
-   Core certificate structure: `certificate_id`, `issued_at`, `issuer`,
    `vehicle`, `checkups`, `signatures`
-   Vehicle fields: `vin`, `license_plate`, `make`, `model`, `year`
-   Checkup structure with components, statuses, notes, and attachments
-   Attachment format supporting `type`, `url`, and optional `data`
-   Dual signature model: `garage_signature` and `ottolog_signature`
-   Audit log tracking actions over time
-   Optional anonymized `owner_hash` field
-   Support for `extensions` to allow partner-specific modules

---

## \[Unreleased]

-   Drafts and proposals under `schema/drafts/` will be listed here once
    reviewed.

---

For proposals or extension suggestions, open a discussion or submit a PR via
GitHub.
