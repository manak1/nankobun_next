/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Form from "../../../@types/form";
import { useForm } from "react-hook-form";
import { Picker, Emoji } from "emoji-mart";
import { jsx, css } from "@emotion/react";
import "emoji-mart/css/emoji-mart.css";
import Detecter from "../../common/Detecter";

type Props = {
  form: Form;
  confirm: (form: Form) => void;
  setForm: (form: Form) => void;
};

const picker = css({
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
});

const buttonColor = css({
  backgroundColor: "#26a6ff;",
});

const numberRegExp = /^[0-9]+$/;

/* あなたの身長は${name}何個分？ */
/* 診断してみる　ボタン */

const CreateForm: React.FC<Props> = ({ form, setForm, confirm }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [emojiData, setEmojiData] = useState({
    native: "🍎",
    id: "apple",
  });
  const { register, handleSubmit, errors } = useForm<Form>({
    mode: "onChange",
    defaultValues: {
      author: "",
      name: "",
      height: null,
      unit: "",
    },
  });

  function showModal() {
    setShowPicker(true);
  }

  function closeModal() {
    setShowPicker(false);
  }

  function updateUnit(data) {
    const targetValue = data.target.value;
    if (targetValue.length === 1) {
      let tempForm = { ...form };
      tempForm.unit = targetValue;
      setForm(tempForm);
    }
  }

  function emojiSelected(emoji: any) {
    closeModal();
    const tempEmojiData = {
      native: emoji.native,
      id: emoji.id,
    };

    setEmojiData(tempEmojiData);
    let tempForm = { ...form };
    tempForm.emoji = {
      id: emoji.id,
      native: emoji.native,
    };
    setForm(tempForm);
  }

  const onSubmit = handleSubmit((formData) => {
    const tempForm = {
      emoji: {
        native: emojiData.native,
        id: emojiData.id,
      },
      ...formData,
    };
    closeModal();
    confirm(tempForm);
  });

  return (
    <form action="#" onSubmit={onSubmit} className="text-left px-4 sm:px-8">
      <div className="flex flex-col mt-4">
        <span className="text-center font-medium">モノの絵文字</span>
        <a href="#" className="mt-2 text-center" onClick={showModal}>
          <div className="text-center border bg-white inline-block mx-auto w-32 px-4 py-4">
            <Emoji emoji={emojiData.id} size={64} />
          </div>
        </a>
      </div>
      {showPicker ? (
        <>
          <Detecter onClick={closeModal} />
          <div css={picker} className="absolute shadow-lg inline-block z-50">
            <Picker
              onSelect={(emoji) => emojiSelected(emoji)}
              i18n={{
                search: "検索",
                categories: {
                  search: "検索結果",
                  recent: "よく使う絵文字",
                  people: "顔 & 人",
                  nature: "動物 & 自然",
                  foods: "食べ物 & 飲み物",
                  activity: "アクティビティ",
                  places: "旅行 & 場所",
                  objects: "オブジェクト",
                  symbols: "記号",
                  flags: "旗",
                  custom: "カスタム",
                },
              }}
            />
          </div>
        </>
      ) : (
        ""
      )}
      <div className="w-full mt-2">
        <label htmlFor="item-name" className="font-medium">
          📦モノの名前
        </label>
        <input
          className="mt-2 form-input bg-white block w-full rounded  border"
          placeholder="リンゴ"
          name="name"
          ref={register({
            required: "必須項目です",
            maxLength: {
              value: 20,
              message: "20文字以内で入力してください",
            },
          })}
          type="text"
        />
        {errors.name?.message ? (
          <span className="text-red-500">*{errors.name?.message}</span>
        ) : (
          ""
        )}
      </div>

      <div className="w-full mt-4 flex flex-col">
        <label htmlFor="" className="font-medium">
          📏モノの高さ
        </label>
        <div className="flex items-center justify-center mt-2 space-x-2">
          <input
            className="form-input bg-white mt-1 block w-full rounded  border"
            type="number"
            name="height"
            placeholder="10"
            ref={register({
              required: "必須項目です",
              pattern: {
                value: numberRegExp,
                message: "整数で入力してください",
              },
              min: {
                value: 1,
                message: "1以上の数字を入力してください",
              },
              max: {
                value: 1000,
                message: "1000以下の数字を入力してください",
              },
            })}
          />
          <span>cm</span>
        </div>
        {errors.height?.message ? (
          <span className="text-red-500">*{errors.height?.message}</span>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col mt-4 ">
        <label htmlFor="" className="font-medium">
          📊モノの単位
        </label>
        <input
          className="mt-2 form-input bg-white block w-full rounded  border"
          placeholder="個"
          type="text"
          name="unit"
          onChange={updateUnit}
          ref={register({
            required: "必須項目です",
            maxLength: {
              value: 1,
              message: "1文字以内で入力してください",
            },
          })}
        />
        {errors.unit?.message ? (
          <span className="text-red-500">*{errors.unit?.message}</span>
        ) : (
          ""
        )}
      </div>
      <div className="items-center">
        <div className="flex flex-col mt-4 w-full">
          <label htmlFor="" className="font-medium">
            🙍‍♂️作者名
          </label>
          <input
            className="mt-2 form-input bg-white block w-full rounded  border"
            placeholder="名無しさん"
            type="text"
            name="author"
            ref={register({
              required: "必須項目です",
            })}
          />
          {errors.author?.message ? (
            <span className="text-red-500">*{errors.author?.message}</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="text-center mt-12">
        <button
          type="submit"
          className="outline-none inline-block mx-auto text-white py-2 w-32 text-center shadow rounded-md hover:opacity-75"
          css={buttonColor}
        >
          診断を作成
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
