class ReportManagerJob < ActiveJob::Base
  queue_as :default

  def perform(report)
    Reports.make_report(report)
  end
end