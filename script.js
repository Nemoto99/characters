'use strict';

let text = document.querySelector('textarea');
text.focus();
let chek = document.querySelector('#check');
let reset = document.querySelector('#reset');

let result = document.querySelector('#result span');
let alltext = document.querySelector('#alltext');
let nontext = document.querySelector('#nontext');
let hiragana = document.querySelector('#hiragana');
let kanji = document.querySelector('#kanji');
let alpa = document.querySelector('#alpha');
let paper = document.querySelector('#paper');
let hidden = document.querySelector('#result');
let hidden2 = document.querySelector('p#des')
let menu = document.querySelector('div#menu');

function checkval() {
    const cleanedtext = text.value.replace(/\s/g, ''); //全文字数を取得
    result.textContent = cleanedtext.length + '文字'; //全文字数を表示
    alltext.textContent = cleanedtext.length + '文字'; //文字数(記号あり)を表示
    nontext.textContent = cleanedtext.length - symbolCount(text.value) + '文字'; //文字数(記号なし)を表示
    hiragana.textContent = hiraganaval(text.value) + '文字'; //ひらがなの文字数を表示
    katakana.textContent = katakanaval(text.value) + '文字'; //カタカナの文字数を表示
    kanji.textContent = kanjiCount(text.value) + '文字'; //漢字の文字数を表示
    alpa.textContent = alphabetCount(text.value) + '文字'; //アルファードの文字数を表示
    paper.textContent = parseInt((cleanedtext.length / 400)) + 1 + '枚'; //原稿用紙換算を表示
    hidden.classList.remove('hidden'); //結果を表示
}

function hiraganaval(str) { //ひらがな文字数を取得
    const hiraganaRegex = /[\u3040-\u309F]+/g;
    const matches = str.match(hiraganaRegex);
    return matches ? matches.join('').length : 0;
}

function katakanaval(str) { //カタカナ文字数を取得
    const katakanaRegex = /[\u30A0-\u30FF]+/g;
    const matches = str.match(katakanaRegex);
    return matches ? matches.join('').length : 0;
}

function symbolCount(str) { // 記号文字数を取得
    const symbolRegex = /[\uFF00-\uFFEF\u3000-\u303F!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g; // 記号の正規表現
    const matches = str.match(symbolRegex);
    return matches ? matches.length : 0;
}

function kanjiCount(str) { // 漢字文字数を取得
    const kanjiRegex = /[\u4E00-\u9FFF]+/g; // 漢字の範囲
    const matches = str.match(kanjiRegex);
    return matches ? matches.join('').length : 0;
}

function alphabetCount(str) { // アルファベット文字数を取得
    const alphabetRegex = /[a-zA-Z]+/g; // アルファベットの範囲
    const matches = str.match(alphabetRegex);
    return matches ? matches.join('').length : 0;
}

function resetval() { //全情報をリセット
    result.textContent = '';
    alltext.textContent = '';
    nontext.textContent = '';
    hiragana.textContent = '';
    katakana.textContent = '';
    kanji.textContent = '';
    alpa.textContent = '';
    paper.textContent = '';
    text.value = '';
    text.focus();
    hidden.classList.add('hidden');
    menu.classList.add('hidden2');
}

function description() { //詳細を表示
    menu.classList.toggle('hidden2');
}

chek.addEventListener('click', function() { //文字数チェックボタン
    checkval();
})

reset.addEventListener('click', function() { //リセットボタン
    resetval();
})

hidden2.addEventListener('click', function() { //詳細表示ボタン
    description();
})