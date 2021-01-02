import React from "react";
import Form from "../../../@types/form";
import { useForm } from "react-hook-form";
import Button from "../../common/Button";

type Props = {
  form: Form;
  setForm: any;
};

/* あなたの身長は${name}何個分？ */
/* 診断してみる　ボタン */

const CreateForm: React.FC<Props> = ({ form, setForm }) => {
  const numberRegExp = /^[0-9]+$/;
  const { register, handleSubmit, reset, errors } = useForm<Form>({
    mode: "onChange",
    defaultValues: {
      author: "",
      emoji: "",
      name: "",
      height: null,
    },
  });

  const onSubmit = handleSubmit((data) => {
    const initialForm = {
      name: "manaki is god",
      emoji: "👩",
      author: "manaki is gorilla",
      height: 20,
    };
    setForm(initialForm);
  });

  function inputClass() {
    return "mt-2 form-input mt-1 block w-full";
  }

  return (
    <form action="#" onSubmit={onSubmit} className="text-left space-y-4">
      <div className="flex flex-col mt-4">
        <label htmlFor="">絵文字</label>
        <input
          className={`${inputClass}`}
          placeholder="test"
          type="text"
          name="emoji"
          ref={register({
            required: "必須項目です",
          })}
        />
      </div>

      <div className="flex items-center justify-between space-x-4">
        <div className="w-1/2 flex flex-col">
          <label htmlFor="item-name">モノの名前</label>
          <input
            className="mt-2 form-input mt-1 block w-full"
            placeholder="リンゴ"
            name="name"
            ref={register({
              required: "必須項目です",
            })}
            type="text"
          />
        </div>

        <div className="w-1/2 flex flex-col">
          <label htmlFor="">モノの高さ</label>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <input
              className="form-input mt-1 block w-full"
              type="number"
              name="height"
              placeholder="10"
              ref={register({
                required: "必須項目です",
              })}
            />
            <span>cm</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="">作者名</label>
        <input
          className="mt-2 form-input block w-full"
          placeholder="名無しさん"
          type="text"
          name="author"
          ref={register({
            required: "必須項目です",
          })}
        />
      </div>
      <div className="text-center pt-10">
        <button
          type="submit"
          className="outline-none inline-block mx-auto bg-blue-500 text-white py-2 w-32 text-center shadow rounded-md hover:opacity-75"
        >
          診断を作成する
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
