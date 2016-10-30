require 'test_helper'

class EvolutionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get evolutions_index_url
    assert_response :success
  end

end
