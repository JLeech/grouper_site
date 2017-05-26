require 'securerandom'

class Reports < ApplicationRecord

	CREATED = "created"
	INPROCESS = "in process"
	TIMEOUT = "timeout"
	ERROR = "error"
	FINISHED = "finished"

    # id INT UNIQUE NOT NULL,
    # uid VARCHAR(15) UNIQUE NOT NULL,
    # start_time TIMESTAMP,
    # state VARCHAR(20),
    # result_path VARCHAR(100),
    # type VARCHAR(10),
    # request TEXT,
    # error_text TEXT,
    # load_times INT,
    # email TEXT

    def result_path
    	return Rails.root.to_s+"/tmp/report_#{self.uuid}.csv"
    end

    def self.make_report(report)
    	report.state = Reports::INPROCESS
    	report.save!
    	file = File.open(report.result_path, 'w')
    	if report.report_type == "gene"
            file.write(Genes.human_fields_names.join(",")+"\n")
    		Genes.count_detailed_statistics(JSON.parse(report.request)).each do |row|
    			file.write(row.values.join(",")+"\n")
    		end
    	end
        if report.report_type == "exon"
            file.write(Exons.human_fields_names.join(",")+"\n")
            Exons.count_detailed_statistics(JSON.parse(report.request)).each do |row|
                file.write(row.values.join(",")+"\n")
            end
        end
        if report.report_type == "intron"
            file.write(Introns.human_fields_names.join(",")+"\n")
            Introns.count_detailed_statistics(JSON.parse(report.request)).each do |row|
                file.write(row.values.join(",")+"\n")
            end
        end
    	file.close
    	report.state = Reports::FINISHED
    	report.save!
    end

    def self.find_by_uuid(uuid)
    	report = Reports.find_by uuid: uuid
    	return report
    end

end
