import {ReportData} from "./custom-types";

export interface IReportGenerator {
    generate(data: ReportData): void;
}