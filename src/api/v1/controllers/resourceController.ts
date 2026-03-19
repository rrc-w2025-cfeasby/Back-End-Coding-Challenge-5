import { Request, Response } from 'express';
import { HTTP_STATUS } from '../../../constants/httpConstants';
import {
    getAllResources,
    getResourceById,
    createResource,
    updateResource,
    deleteResource,
    ResourceType
} from "../services/resourceService";

/**
 * Get Health API
 * 
 * @param req - The request object
 * @param res - The response object
 */
export function getHealth(req: Request, res: Response): void {
    const uptime = process.uptime();
    const timestamp = new Date().toISOString();

    res.status(HTTP_STATUS.OK).json({
        status: "ok",
        uptime,
        timestamp,
        version: "1.0.0"
    });
};

/**
 * Get All Resources
 * 
 * @param req - The request object
 * @param res - The response object
 */
export function getResources(req: Request, res: Response): void {
    const data = getAllResources();

    res.status(HTTP_STATUS.OK).json({
        message: "Resources retrieved",
        count: data.length,
        data
    });
};

/**
 * Get Resource by id
 * 
 * @param req - The request object
 * @param res - The response object
 */
export function getResource(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const resource = getResourceById(id);

    if (!resource) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Resource retrieved",
        data: resource
    });
};

/**
 * Create Resource
 * 
 * @param req - The request object
 * @param res - The response object
 */
export function createResourceHandler(req: Request, res: Response): void {
    const { title, type, url, description } = req.body;

    if(!title){
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Missing required field: title"
        });
        return;
    }

    if(!type){
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Missing required field: type"
        });
        return;
    }

    if(!url){
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: "Missing required field: url"
        });
        return;
    }

    const newResource = createResource({
        title,
        type: type as ResourceType,
        url,
        description
    });

    res.status(HTTP_STATUS.CREATED).json({
        message: "Resource created",
        data: newResource
    });
};

/**
 * Update Resource
 * 
 * @param req - The request object
 * @param res - The response object
 */
export function updateResourceHandler(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const updated = updateResource(id, req.body);

    if(!updated){
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Resource updated",
        data: updated
    });
};

/**
 * Delete Resource
 * 
 * @param req - The request object
 * @param res - The response object
 */
export function deleteResourceHandler(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const deleted = deleteResource(id);

    if(!deleted){
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Resource not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Resource deleted"
    });
};