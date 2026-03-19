import {
  getAllResources,
  getResourceById,
  createResource,
  deleteResource,
  ResourceType,
} from "../src/api/v1/services/resourceService";

describe("Resource Service", () => {
  // 1. Get all resources - Returns array of all resources
  test("getAllResources returns an array of resources", () => {
    // Arrange
    // (No special setup needed; service has initial data)

    // Act
    const resources = getAllResources();

    // Assert
    expect(Array.isArray(resources)).toBe(true);
    expect(resources.length).toBeGreaterThan(0);
  });

  // 2. Get resource by ID - Returns correct resource
  test("getResourceById returns the correct resource when it exists", () => {
    // Arrange
    const all = getAllResources();
    const existing = all[0];

    // Act
    const result = getResourceById(existing.id);

    // Assert
    expect(result).not.toBeNull();
    expect(result?.id).toBe(existing.id);
  });

  // 3. Get resource by ID - Returns null for non-existent ID
  test("getResourceById returns null for non-existent ID", () => {
    // Arrange
    const nonExistentId = 999999;

    // Act
    const result = getResourceById(nonExistentId);

    // Assert
    expect(result).toBeNull();
  });

  // 4. Create resource - Adds resource and returns it with ID
  test("createResource adds a resource and returns it with an ID", () => {
    // Arrange
    const payload = {
      title: "New Resource",
      type: "article" as ResourceType,
      url: "https://example.com/new",
      description: "A new resource",
    };

    // Act
    const created = createResource(payload);

    // Assert
    expect(created.id).toBeDefined();
    expect(created.title).toBe(payload.title);
  });

  // 5. Delete resource - Removes resource from collection
  test("deleteResource removes resource from collection", () => {
    // Arrange
    const allBefore = getAllResources();
    const target = allBefore[0];

    // Act
    const deleted = deleteResource(target.id);
    const after = getResourceById(target.id);

    // Assert
    expect(deleted).toBe(true);
    expect(after).toBeNull();
  });
});