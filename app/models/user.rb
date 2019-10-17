class User < ApplicationRecord
  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :todos

  after_initialize :ensure_session_token

  def self.find_by_credentials(form_username, form_password)
    user = User.find_by(username: form_username)

    return nil if user.nil?
    user.is_password?(form_password) ? user : nil
  end

  def is_password?(form_password)
    BCrypt::Password.new(self.password_digest).is_password?(form_password)
  end

  def password=(form_password)
    @password=form_password
    self.password_digest = BCrypt::Password.create(form_password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def create_demo_todo
    demo = Todo.create({
      title: 'Click here to see todo details',
      body: 'Use this todo to practice using the Todos App',
      done: false,
      user_id: self.id
    })

    Step.create({
      title: 'Try adding another step to this todo',
      body: 'Fill in anything you want for Title and Body in the purple box below, then click the Add Step button',
      done: false,
      todo_id: demo.id
    })

    Step.create({
      title: 'Try marking this step as done',
      body: 'Click the Done button at the top right of this orange box',
      done: false,
      todo_id: demo.id
    })

    Step.create({
      title: 'Try deleting this step',
      body: 'Click the Delete Step button at the bottom of this orange box',
      done: false,
      todo_id: demo.id
    })

    Step.create({
      title: 'Delete this todo when you\'re done practicing',
      body: 'Click the Delete Todo button at the bottom of the white box',
      done: false,
      todo_id: demo.id
    })
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
