require 'test_helper'

class YelpsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get yelps_index_url
    assert_response :success
  end

end
