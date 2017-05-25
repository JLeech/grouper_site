class ReportsController < ApplicationController

  def show
    @report = Reports.find_by_uuid(params[:id])
  end

  def make_gene_report
  	report = ReportManager.make_gene_report(params)
  	report_path = view_context.link_to( "here", controller: "reports", action: "show", id: report.uuid)
  	render json: {report_path: report_path}
  end

  def download
  	#puts "#{params.to_h}"
  	report = Reports.find_by_uuid(params[:report_id])
  	send_file report.result_path, :type=>"application/csv", :x_sendfile=>true
  end

end

# Installing turbolinks-source 5.0.3 (was 5.0.0)
# Installing tzinfo 1.2.3 (was 1.2.2)
# Installing nokogiri 1.7.2 (was 1.7.0.1) with native extensions


# Using rack-test 0.6.3
# Installing rack-protection 2.0.0 (was 1.5.3)
# Using sprockets 3.7.1
# Using websocket-driver 0.6.5
# Using mime-types 3.1
# Installing autoprefixer-rails 7.1.1 (was 6.5.3)
# Installing uglifier 3.2.0 (was 3.0.3)
# Using coffee-script 2.4.1
# Installing rb-inotify 0.9.8 (was 0.9.7)
# Using turbolinks 5.0.1
# Installing activesupport 5.0.3 (was 5.0.2)
# Using loofah 2.0.3
# Installing sidekiq 5.0.0 (was 4.2.5)
# Installing mail 2.6.5 (was 2.6.4)
# Installing bootstrap 4.0.0.alpha6 (was 4.0.0.alpha5)
# Using listen 3.0.8
# Installing rails-dom-testing 2.0.3 (was 2.0.2)
# Installing globalid 0.4.0 (was 0.3.7)
# Installing activemodel 5.0.3 (was 5.0.2)
# Installing jbuilder 2.6.4 (was 2.6.0)
# Installing spring 2.0.2 (was 2.0.0)
# Using rails-html-sanitizer 1.0.3
# Installing activejob 5.0.3 (was 5.0.2)
# Installing activerecord 5.0.3 (was 5.0.2)
# Installing carrierwave 1.1.0 (was 1.0.0.rc)
# Using spring-watcher-listen 2.0.1
# Installing actionview 5.0.3 (was 5.0.2)
# Installing actionpack 5.0.3 (was 5.0.2)
# Installing actioncable 5.0.3 (was 5.0.2)
# Installing actionmailer 5.0.3 (was 5.0.2)
# Installing railties 5.0.3 (was 5.0.2)
# Using sprockets-rails 3.2.0
# Using coffee-rails 4.2.1
# Installing jquery-rails 4.3.1 (was 4.2.1)
# Using jquery-ui-rails 6.0.1
# Using jquery_query_builder-rails 0.2.2
# Installing web-console 3.5.1 (was 3.4.0)
# Installing rails 5.0.3 (was 5.0.2)
# Using sass-rails 5.0.6
