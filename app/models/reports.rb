require 'securerandom'

class Reports < ApplicationRecord

	CREATED = "in queue"
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

    def for_html_tab
        report_id = "Report id: #{self.uuid}"
        report_state = "State: #{self.state}"
        report_created_at = "Created at: #{self.start_time}"
        just_id = self.uuid
        return ({ report_id: report_id, report_state: report_state, report_created_at: report_created_at, just_id: just_id })
    end

    def ready?
        self.state == Reports::FINISHED
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

    def self.not_found_response 
        report_state = "Report not found"
        return ({ report_id: "", report_state: report_state, report_created_at: "", just_id: 0 })
    end

    def self.find_by_uuid(uuid)
    	report = Reports.find_by uuid: uuid
    	return report
    end

end
