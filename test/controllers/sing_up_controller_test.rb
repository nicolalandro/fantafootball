require 'test_helper'

class SingUpControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sing_up_index_url
    assert_response :success
  end

end
