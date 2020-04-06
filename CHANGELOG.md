# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v2.0.0]

#### Added

-   HMAC_SHA384 hash computation with validation
-   Mocha testing support
-   .editorconfig for unified source code formatting

#### Changed

-   Improved higher level functions for encryption, decryption and hashing for a simpler use in frameworks such as Angular

#### Fixed

-   Fixed missing IV parameter for AES encryption/decryption logic

## [v1.1.0]

### Added

-   Asymmetric Key generation functionality, used to decrypt and encrypt the symmetric keys
-   Symmetric key decryption and encryption with encrypted symmetric keys as input
-   CHANGELOG.md to keep track of changes
-   README.md for quick start guide and documentation
-   LICENSE with the MIT license under which the crypto library is released

[unreleased]: https://github.com/cambridge-blockchain/crypto-lib/compare/v2.0.0...HEAD
[v2.0.0]: https://github.com/cambridge-blockchain/crypto-lib/compare/v1.1.0...v2.0.0
[v1.1.0]: https://github.com/cambridge-blockchain/crypto-lib/compare/0d5e3d201c0c123234e0fd6e5808d8a2354a1c15...v1.1.0
