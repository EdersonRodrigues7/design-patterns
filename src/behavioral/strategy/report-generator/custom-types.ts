import {File_Extension} from "./enums";
import {IReportGenerator} from "./interfaces";

export type ReportData = {}
export type ReportGeneratorResolver = (extension: File_Extension) => IReportGenerator | undefined;