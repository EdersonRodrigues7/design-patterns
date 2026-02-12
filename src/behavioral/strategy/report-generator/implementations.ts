import {IReportGenerator} from "./interfaces";
import {ReportData} from "./custom-types";

export class PdfReportGenerator implements IReportGenerator {
    generate(data: ReportData): void {}
}
export class CsvReportGenerator implements IReportGenerator {
    generate(data: ReportData): void {}
}
export class JsonReportGenerator implements IReportGenerator {
    generate(data: ReportData): void {}
}