import { ICustomer } from "../model/ICustomer";
import { IFormData } from "../model/IFormData";
import { IProject } from "../model/IProject";

export default class CustomerMapper {

    public static mapRequestFormData(item: any): IFormData {
        return {
            Title: item.title,
            Email: item.email,
            Address: item.address ? item.address : "",
            Interests: item.interests && item.interests.length > 0 ? item.interests : [],
            ProjectsId: item.projects && item.projects.length > 0 ? item.projects : []
        } as IFormData;
    }

    public static mapCustomerInfo(item: any): ICustomer {
        return {
            ID: item.ID,
            Title: item.Title,
            Email: item.Email,
            Address: item.Address ? item.Address : "",
            Interests: item.Interests && item.Interests.length > 0 ? item.Interests : [],
            ProjectsId: item.ProjectsId && item.ProjectsId.length > 0 ? item.ProjectsId : [],
            Projects: item.Projects && item.Projects.length > 0 ? item.Projects : [],
        } as ICustomer;
    }

    public static mapCustomerProjects(item: any): IProject {
        return {
            ID: Number(item.ID),
            Title: item.Title,
            Status: item.Status,
            StartDate: item.StartDate,
            Members: item.Members && item.Members.length > 0 ? item.Members : []
        } as IProject;
    }
}

