class ReportsController < ApplicationController

  def show
    @report = Reports.find_by_uuid(params[:id])
  end

  def report_from_tab
    report = Reports.find_by_uuid(params[:report_id])
    report_path = "/download?report_id=#{report.uuid}"
    response = report.for_html_tab
    response["load_link"] = report_path if report.ready?
    render json: response
  end

  def make_gene_report
  	report = ReportManager.make_gene_report(params)
  	report_path = "/download?report_id=#{report.uuid}"
  	response = report.for_html_tab
    response["load_link"] = report_path if report.ready?
    render json: response
  end

  def make_exon_report
    report = ReportManager.make_exon_report(params)
    report_path = "/download?report_id=#{report.uuid}"
    response = report.for_html_tab
    response["load_link"] = report_path if report.ready?
    render json: response
  end

  def make_intron_report
    report = ReportManager.make_intron_report(params)
    report_path = "/download?report_id=#{report.uuid}"
    response = report.for_html_tab
    response["load_link"] = report_path if report.ready?
    render json: response
  end

  def download
  	report = Reports.find_by_uuid(params[:report_id])
  	send_file report.result_path, :type=>"application/csv", :x_sendfile=>true
  end

end