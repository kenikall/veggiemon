require 'test_helper'

class BackpackControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get backpack_show_url
    assert_response :success
  end

end
