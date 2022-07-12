import { FormDisplayMode, Guid } from "@microsoft/sp-core-library";
import { FormCustomizerContext } from "@microsoft/sp-listview-extensibility";
import { ICustomer } from "../../model/ICustomer";
import { IFormData } from "../../model/IFormData";

export interface ICustomerFormProps {
    siteUrl: string;
    listGuid: Guid;
    projects: any[];
    listItem?: ICustomer;
    displayMode: FormDisplayMode;
    EditFormUrl: string;
    itemID: number | undefined;
    onSave: () => void;
    onClose: () => void;
}