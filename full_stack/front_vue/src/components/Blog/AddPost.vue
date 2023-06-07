<script setup>

// Компоненты для редактора
import {EditorContent, useEditor} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import MyLog from "@/services/myLog";

const sendToBack = () => {
  MyLog(newPost)
  return false
}

let newPost = {
  title: "Hello",
  body: "<p>Мы редактируем тексты - и не используем больше простые TextArea - потому что есть масса WYSIWYG редакторов  🎉</p>"
}

// редактор
const editor = useEditor({
  content: newPost.body,
  extensions: [
    StarterKit,
  ],
  onUpdate: ({editor}) => {
    newPost.body = editor.getHTML()
  }
})

</script>

<template>
  <form class="mt-3" @submit.prevent="sendToBack">
    <div><label>title<input type="text" v-model="newPost.title"></label></div>

<!--    <div><textarea> </textarea></div>-->
    <div>
      <div v-if="editor">
        <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          bold
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          italic
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
          strike
        </button>
        <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
          undo
        </button>
        <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
          redo
        </button>
      </div>
      <editor-content :editor="editor" />
    </div>
    <input class="btn btn-md btn-block btn-danger-gradiant border-0" type="submit">
  </form>

</template>

<style scoped>

</style>
