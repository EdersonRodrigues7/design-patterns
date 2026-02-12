import {File_Extension} from "./enums";
import {IReportGenerator} from "./interfaces";
import {CsvReportGenerator, JsonReportGenerator, PdfReportGenerator} from "./implementations";

export function getReportGenerators(): Map<File_Extension, IReportGenerator> {
    return new Map<File_Extension, IReportGenerator>([
        [File_Extension.PDF, new PdfReportGenerator()],
        [File_Extension.CSV, new CsvReportGenerator()],
        [File_Extension.JSON, new JsonReportGenerator()]
    ]);
}