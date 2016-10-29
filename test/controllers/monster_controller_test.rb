require 'test_helper'

class MonsterControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get monster_new_url
    assert_response :success
  end

  test "should get show" do
    get monster_show_url
    assert_response :success
  end

end
