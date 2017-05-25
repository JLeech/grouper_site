class ReportManager

  def self.make_gene_report(params)
  	report = Reports.create(uuid: SecureRandom.uuid, 
  						   request: params.to_json, 
  						   start_time: DateTime.now.strftime("%F %T %:z"), 
  						   report_type: "gene",
  						   state: Reports::CREATED)
  	#ReportManagerJob.perform_later report
    Reports.make_report(report)
  	return report
  end

  def self.make_exon_report(params)

  end

  def self.make_intron_report(params)

  end

  def self.find_report(params)

  end

end