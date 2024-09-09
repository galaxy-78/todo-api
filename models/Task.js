import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 30,
    },
    description: { type: String },
    isComplete: { type: Boolean, required: true, default: false },
  },
  { timestamps: true } // createdAt, updatedAt 알아서 생성 관리
);

const Task = mongoose.model("Task", TaskSchema); // tasks 컬렉션에 데이터를 추가.조회.수정.삭제

export default Task;
