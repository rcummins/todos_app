class TodosController < ApplicationController
  def index
    render json: Todo.all
  end

  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: Todo.find(params[:id])
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy

    render json: @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end