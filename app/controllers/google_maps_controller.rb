class GoogleMapsController < ApplicationController
  def index
    @parks_call = Yelp.client.search(@location, { term: 'park', limit: 16 }).businesses
  end
end
