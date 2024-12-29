"use strict";
'use client';
class MyButton extends HTMLElement {
    constructor() {
        super();
        // Shadow DOM 생성
        const shadow = this.attachShadow({ mode: 'open' });
        // 버튼 요소 생성
        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'Click Me';
        // 스타일 요소 생성
        const style = document.createElement('style');
        style.textContent = `
          button {
            background-color: #0070f3;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
          }
          button:hover {
            background-color: #005bb5;
          }
        `;
        // Shadow DOM에 스타일 및 버튼 추가
        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}
// Custom Element 등록
if (!customElements.get('my-button')) {
    customElements.define('my-button', MyButton);
}