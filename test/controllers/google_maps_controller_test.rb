require 'test_helper'

class GoogleMapsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get google_maps_index_url
    assert_response :success
  end

end
