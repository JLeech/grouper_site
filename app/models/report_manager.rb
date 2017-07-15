class ReportManager

  def self.make_gene_report(params)
  	report = create_report(params, "gene")
  	ReportManagerJob.perform_later report
    #Reports.make_report(report)
  	return report
  end

  def self.make_exon_report(params)
    report = create_report(params, "exon")
    ReportManagerJob.perform_later report
    #Reports.make_report(report)
    return report
  end

  def self.make_intron_report(params)
    report = create_report(params, "intron")
    #ReportManagerJob.perform_later report
    Reports.make_report(report)
    return report

  end 

  def self.create_report(params, type)
    report = Reports.create(uuid: SecureRandom.uuid, 
                 request: params.to_json, 
                 start_time: DateTime.now.strftime("%F %T %:z"), 
                 report_type: type,
                 state: Reports::CREATED)
    return report
  end

end