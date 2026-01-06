/**
 * ProjectVisibilityEngine
 * -----------------------
 * Centralized state engine responsible for determining
 * project visibility across search, filters, pagination,
 * and future discovery features.
 *
 * This acts as a single source of truth for:
 * - Active search query
 * - Active category filter
 * - Pagination state
 * - Derived visible projects
 * - Empty state conditions
 *
 * UI layers (DOM, pagination controls, empty state)
 * should never compute visibility directly.
 * They should subscribe to this engine instead.
 *
 * This design improves:
 * - Scalability (sorting, tags, server-side pagination)
 * - Maintainability (logic lives in one place)
 * - Reliability (prevents inconsistent UI states)
 */
