export type ResourceType = "article" | "video" | "tutorial" | "documentation";

/**
 * Resource Interface
 */
export interface Resource {
    id: number;
    title: string;
    type: ResourceType;
    url: string;
    description: string;
    createdAt: string;
}

/**
 * Resource sample data
 */
let resources: Resource[] = [
    {
        id: 1,
        title: "Express.js Guide",
        type: "documentation",
        url: "https://expressjs.com/en/guide",
        description: "Official Express.js documentation",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        title: "TypeScript Basics",
        type: "video",
        url: "https://example.com/ts-basics",
        description: "Introduction to TypeScript",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        title: "REST API Design",
        type: "article",
        url: "https://example.com/rest-design",
        description: "Best practices for REST API design",
        createdAt: new Date().toISOString(),
  },
  {
        id: 4,
        title: "Jest Testing Tutorial",
        type: "tutorial",
        url: "https://example.com/jest-tutorial",
        description: "Complete guide to testing with Jest",
        createdAt: new Date().toISOString(),
  },
];

/**
 * Get next ID
 * 
 * @returns the next id
 */
function getNextId(): number {
    return resources.length > 0 ? Math.max(...resources.map(r => r.id)) + 1 : 1;
}

/**
 * Get All Resources
 * 
 * @returns All the available resources
 */
export function getAllResources(): Resource[] {
    return resources;
};

/**
 * Get Resource by ID
 * 
 * @param id - the id being grabbed
 * @returns the resource by id or null if not found
 */
export function getResourceById(id: number): Resource | null {
    const resource = resources.find(r => r.id === id);
    return resource || null;
};

/**
 * Create Resource
 * 
 * @param data The resource being created
 * @returns the created resource
 */
export function createResource(
    data: {
        title: string; 
        type: ResourceType;
        url: string;
        description?: string;
    }): Resource {
        const newResource: Resource = {
            id: getNextId(),
            title: data.title,
            type: data.type,
            url: data.url,
            description: data.description ?? "",
            createdAt: new Date().toISOString()
        };
        resources.push(newResource);
        return newResource;
};

/**
 * Update Resource
 * 
 * @param id - the id to update if found
 * @param data - the data to update
 * @returns the updated resource
 */
export function updateResource(
        id: number, 
        data: Partial<Omit<Resource, "id" | "createdAt">>
    ): Resource | null {
    const index = resources.findIndex(r => r.id === id);
    if(index === -1){
        return null;
    }

    resources[index] = {
        ...resources[index],
        ...data
    };

    return resources[index];
};

/**
 * Delete Resource
 * 
 * @param id - the id to delete if found
 * @returns the deleted resource
 */
export function deleteResource(id: number): boolean {
    const initialLength = resources.length;
    resources = resources.filter((r) => r.id !== id);
    return resources.length < initialLength;
};