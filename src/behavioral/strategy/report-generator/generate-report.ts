import {ReportData, ReportGeneratorResolver} from "./custom-types";
import {getReportGenerators} from "./utils";
import {File_Extension} from "./enums";

class GenerateReportUseCase {
    constructor(
        private resolver: ReportGeneratorResolver
    ){}
    execute(data: ReportData, extension?: File_Extension){
        const reportGenerator = this.resolver(extension ?? File_Extension.PDF);

        if(!reportGenerator) {
            throw new Error('Invalid file extension');
        }

        reportGenerator.generate(data);
    }
}

function generateReport(data: ReportData, extension?: File_Extension) {
    const generators = getReportGenerators();
    const useCase = new GenerateReportUseCase(
        (extension) => generators.get(extension)
    );
    useCase.execute(data);
}
const sampleReport = {};
generateReport(sampleReport);
generateReport(sampleReport, File_Extension.CSV);
generateReport(sampleReport, File_Extension.JSON);