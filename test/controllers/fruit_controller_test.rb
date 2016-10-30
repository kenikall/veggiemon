require 'test_helper'

class FruitControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get fruit_new_url
    assert_response :success
  end

end
