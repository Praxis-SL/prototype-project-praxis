// ─── MÓDULOS ──────────────────────────────────────────────────────────────────

const MODULES = [
  {
    id: 1,
    name: "Variables y tipos de datos",
    duration: "8 min",
    xp: 100,
    steps: [
      {
        type: "concept",
        eyebrow: "CONCEPTO · 2 MIN",
        title: "Guarda información con variables",
        content: `
          <p>Una <strong>variable</strong> es una caja con nombre donde guardas información. En JavaScript moderno usamos <code style="color:var(--orange)">let</code> y <code style="color:var(--orange)">const</code>.</p>
          <div class="code-snippet"><span class="kw">let</span> nombre <span class="op">=</span> <span class="str">"Ana"</span>;      <span class="cm">// puede cambiar</span>
<span class="kw">const</span> edad <span class="op">=</span> <span class="num">25</span>;          <span class="cm">// no puede cambiar</span>

<span class="fn">console</span>.<span class="fn">log</span>(nombre);   <span class="cm">// imprime: Ana</span>
<span class="fn">console</span>.<span class="fn">log</span>(edad);     <span class="cm">// imprime: 25</span></div>
          <p>Los tipos más básicos son: <strong>string</strong> (texto entre comillas), <strong>number</strong> (número), y <strong>boolean</strong> (true/false).</p>
          <div class="key-idea">Variables = nombre + valor. Usa const por defecto, let cuando necesites reasignar.</div>
        `,
      },
      {
        type: "exercise",
        eyebrow: "CÓDIGO · 5 MIN",
        title: "Tu primera variable",
        task: "Crea una variable llamada <code>miNombre</code> con tu nombre (string) y una variable <code>miEdad</code> con tu edad (número). Luego imprime ambas con <code>console.log</code>.",
        hints: [
          'Usa <code>const miNombre = "Juan"</code> para el nombre',
          "Usa <code>const miEdad = 25</code> para la edad (sin comillas)",
          "Llama a <code>console.log()</code> dos veces, una por variable",
        ],
        starterCode: `// Escribe tu código aquí
// Declara miNombre (string) y miEdad (number)
// Luego imprime cada una con console.log

`,
        validate(code, logs) {
          if (!code.includes("miNombre"))
            return {
              ok: false,
              msg: "❌ No veo la variable miNombre. Declárala con const o let.",
            };
          if (!code.includes("miEdad"))
            return {
              ok: false,
              msg: "❌ No veo la variable miEdad. Declárala con const o let.",
            };
          if (logs.length < 2)
            return {
              ok: false,
              msg: "❌ Necesito al menos 2 console.log ejecutados. ¿Imprimiste ambas variables?",
            };
          const hasString = logs.some(
            (l) => typeof l.val === "string" && l.val.trim().length > 0,
          );
          const hasNumber = logs.some((l) => typeof l.val === "number");
          if (!hasString)
            return {
              ok: false,
              msg: '❌ miNombre debería ser un string. Escribe tu nombre entre comillas: "Juan".',
            };
          if (!hasNumber)
            return {
              ok: false,
              msg: "❌ miEdad debería ser un número. Escríbelo sin comillas: 25.",
            };
          return {
            ok: true,
            msg: "✓ Perfecto. Declaraste ambas variables con el tipo correcto y las imprimiste. ¡Primer reto superado!",
          };
        },
      },
    ],
  },
  {
    id: 2,
    name: "Funciones: código reutilizable",
    duration: "10 min",
    xp: 120,
    steps: [
      {
        type: "concept",
        eyebrow: "CONCEPTO · 2 MIN",
        title: "Funciones: define una vez, usa siempre",
        content: `
          <p>Una <strong>función</strong> es un bloque de código con nombre que puedes ejecutar cuando quieras. Los <strong>parámetros</strong> son los datos de entrada; el <strong>return</strong> es lo que devuelve.</p>
          <div class="code-snippet"><span class="kw">function</span> <span class="fn">saludar</span>(nombre) {
  <span class="kw">return</span> <span class="str">"Hola, "</span> <span class="op">+</span> nombre <span class="op">+</span> <span class="str">"!"</span>;
}

<span class="fn">console</span>.<span class="fn">log</span>( <span class="fn">saludar</span>(<span class="str">"Ana"</span>) );  <span class="cm">// Hola, Ana!</span>
<span class="fn">console</span>.<span class="fn">log</span>( <span class="fn">saludar</span>(<span class="str">"Luis"</span>) ); <span class="cm">// Hola, Luis!</span></div>
          <p>Una función sin <code style="color:var(--orange)">return</code> devuelve <code style="color:var(--muted)">undefined</code>. Siempre devuelve algo si necesitas usar el resultado.</p>
          <div class="key-idea">Función = receta. Parámetros = ingredientes. Return = resultado.</div>
        `,
      },
      {
        type: "exercise",
        eyebrow: "CÓDIGO · 6 MIN",
        title: "Crea la función sumar",
        task: "Escribe una función llamada <code>sumar</code> que reciba dos números (<code>a</code> y <code>b</code>) y retorne su suma. Pruébala: <code>console.log(sumar(3, 7))</code> debe imprimir <strong>10</strong>.",
        hints: [
          "Usa <code>function sumar(a, b) { ... }</code>",
          "Dentro del cuerpo escribe <code>return a + b;</code>",
          "Luego llámala: <code>console.log(sumar(3, 7))</code>",
          "El resultado debe ser 10",
        ],
        starterCode: `// Define la función sumar aquí
// Debe recibir dos parámetros y retornar su suma


// Prueba (descomenta):
// console.log(sumar(3, 7))  // debe imprimir 10
`,
        validate(code, logs) {
          if (
            !code.match(/function\s+sumar/) &&
            !code.match(/sumar\s*=/) &&
            !code.match(/sumar\s*=/)
          )
            return {
              ok: false,
              msg: "❌ No veo una función llamada sumar. Declárale así: function sumar(a, b) { ... }",
            };
          if (!code.includes("return"))
            return {
              ok: false,
              msg: "❌ La función necesita un return. Añade: return a + b;",
            };
          const numLogs = logs.filter((l) => typeof l.val === "number");
          if (numLogs.length === 0)
            return {
              ok: false,
              msg: "❌ Llama a la función: console.log(sumar(3, 7))",
            };
          if (!numLogs.some((l) => l.val === 10))
            return {
              ok: false,
              msg: `❌ sumar(3, 7) debería dar 10, pero obtuve ${numLogs[0]?.val}. Revisa la lógica.`,
            };
          return {
            ok: true,
            msg: "✓ Correcto. sumar(3, 7) → 10. Tu función funciona perfectamente.",
          };
        },
      },
    ],
  },
  {
    id: 3,
    name: "Condicionales: toma decisiones",
    duration: "9 min",
    xp: 140,
    steps: [
      {
        type: "concept",
        eyebrow: "CONCEPTO · 2 MIN",
        title: "if / else: el código que decide",
        content: `
          <p>Con <strong>if/else</strong> tu programa elige entre dos caminos según si una condición es verdadera o falsa.</p>
          <div class="code-snippet"><span class="kw">const</span> temp <span class="op">=</span> <span class="num">30</span>;

<span class="kw">if</span> (temp <span class="op">></span> <span class="num">25</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Hace calor"</span>);
} <span class="kw">else</span> {
  <span class="fn">console</span>.<span class="fn">log</span>(<span class="str">"Está fresquito"</span>);
}
<span class="cm">// → Hace calor</span></div>
          <p>Operadores clave: <code style="color:#56B6C2">&gt;</code> mayor, <code style="color:#56B6C2">&lt;</code> menor, <code style="color:#56B6C2">&gt;=</code> mayor o igual, <code style="color:#56B6C2">===</code> igual exacto, <code style="color:#56B6C2">!==</code> diferente.</p>
          <div class="key-idea">if (condición) { verdadero } else { falso }</div>
        `,
      },
      {
        type: "exercise",
        eyebrow: "CÓDIGO · 5 MIN",
        title: "¿Aprobado o reprobado?",
        task: 'Escribe una función <code>calificar(nota)</code>. Si <code>nota >= 5</code> retorna <code>"Aprobado"</code>, si no, retorna <code>"Reprobado"</code>. Pruébala con dos valores distintos.',
        hints: [
          "Estructura: <code>function calificar(nota) { if (...) { return ... } else { return ... } }</code>",
          "Condición: <code>nota >= 5</code>",
          "Prueba con <code>console.log(calificar(7))</code> y <code>console.log(calificar(3))</code>",
        ],
        starterCode: `// Función calificar(nota)
// Retorna "Aprobado" si nota >= 5, "Reprobado" si no


// Prueba:
// console.log(calificar(7))  // Aprobado
// console.log(calificar(3))  // Reprobado
`,
        validate(code, logs) {
          if (!code.includes("calificar"))
            return {
              ok: false,
              msg: "❌ No veo la función calificar. Declárala primero.",
            };
          if (!code.includes("return"))
            return {
              ok: false,
              msg: "❌ La función necesita return para devolver el resultado.",
            };
          const strLogs = logs.filter((l) => typeof l.val === "string");
          if (strLogs.length === 0)
            return {
              ok: false,
              msg: "❌ Usa console.log(calificar(7)) para ver el resultado.",
            };
          if (!strLogs.some((l) => l.val === "Aprobado"))
            return {
              ok: false,
              msg: '❌ No veo "Aprobado" en la salida. Prueba con nota >= 5.',
            };
          if (!strLogs.some((l) => l.val === "Reprobado"))
            return {
              ok: false,
              msg: '❌ No veo "Reprobado". Prueba también con nota < 5.',
            };
          return {
            ok: true,
            msg: '✓ Genial. calificar(7) → "Aprobado", calificar(3) → "Reprobado". Condicional dominado.',
          };
        },
      },
    ],
  },
  {
    id: 4,
    name: "Arrays: listas de datos",
    duration: "10 min",
    xp: 160,
    steps: [
      {
        type: "concept",
        eyebrow: "CONCEPTO · 2 MIN",
        title: "Arrays: guarda múltiples valores",
        content: `
          <p>Un <strong>array</strong> es una lista ordenada. Se define con corchetes <code style="color:var(--orange)">[]</code> y cada elemento tiene un índice que <strong>empieza en 0</strong>.</p>
          <div class="code-snippet"><span class="kw">const</span> frutas <span class="op">=</span> [<span class="str">"manzana"</span>, <span class="str">"pera"</span>, <span class="str">"uva"</span>];

<span class="fn">console</span>.<span class="fn">log</span>(frutas[<span class="num">0</span>]);       <span class="cm">// manzana</span>
<span class="fn">console</span>.<span class="fn">log</span>(frutas.length);   <span class="cm">// 3</span>

frutas.<span class="fn">push</span>(<span class="str">"melón"</span>);        <span class="cm">// añade al final</span>
<span class="fn">console</span>.<span class="fn">log</span>(frutas.length);   <span class="cm">// 4</span></div>
          <p>Métodos más usados: <code style="color:#61AFEF">push()</code> añade al final, <code style="color:#61AFEF">pop()</code> elimina el último, <code style="color:#61AFEF">.length</code> da el tamaño.</p>
          <div class="key-idea">Array[0] = primer elemento. .length = cuántos hay. .push() = añadir.</div>
        `,
      },
      {
        type: "exercise",
        eyebrow: "CÓDIGO · 6 MIN",
        title: "Trabaja con una lista",
        task: "Crea un array <code>colores</code> con al menos 3 strings. Luego: (1) imprime el primer elemento, (2) añade un color con <code>.push()</code>, (3) imprime la longitud final.",
        hints: [
          '<code>const colores = ["rojo", "verde", "azul"]</code>',
          "Primer elemento: <code>console.log(colores[0])</code>",
          'Añadir: <code>colores.push("amarillo")</code>',
          "Longitud: <code>console.log(colores.length)</code> — debe ser >= 4",
        ],
        starterCode: `// Crea el array colores con al menos 3 colores (strings)


// 1. Imprime el primer elemento
// 2. Añade un color con push
// 3. Imprime la longitud final
`,
        validate(code, logs) {
          if (!code.includes("colores"))
            return {
              ok: false,
              msg: "❌ No veo el array colores. Decláralo primero.",
            };
          if (!code.includes("push"))
            return {
              ok: false,
              msg: "❌ Usa .push() para añadir un elemento nuevo al array.",
            };
          if (logs.length < 2)
            return {
              ok: false,
              msg: "❌ Necesito al menos 2 console.log: el primer elemento y la longitud.",
            };
          if (!logs.some((l) => typeof l.val === "string"))
            return {
              ok: false,
              msg: "❌ Imprime el primer elemento (colores[0]), que debería ser un string.",
            };
          if (!logs.some((l) => typeof l.val === "number" && l.val >= 4))
            return {
              ok: false,
              msg: "❌ Después del push la longitud debería ser >= 4. Imprime colores.length.",
            };
          return {
            ok: true,
            msg: "✓ Correcto. Accediste al primer elemento, añadiste con push e imprimiste la longitud. Arrays dominados.",
          };
        },
      },
    ],
  },
  {
    id: 5,
    name: "Bucles: repite sin repetirte",
    duration: "11 min",
    xp: 200,
    steps: [
      {
        type: "concept",
        eyebrow: "CONCEPTO · 2 MIN",
        title: "for: ejecuta código N veces",
        content: `
          <p>Un <strong>bucle for</strong> repite un bloque de código un número determinado de veces. Perfecto para procesar listas o repetir operaciones.</p>
          <div class="code-snippet"><span class="kw">const</span> nums <span class="op">=</span> [<span class="num">10</span>, <span class="num">20</span>, <span class="num">30</span>];

<span class="kw">for</span> (<span class="kw">let</span> i <span class="op">=</span> <span class="num">0</span>; i <span class="op">&lt;</span> nums.length; i<span class="op">++</span>) {
  <span class="fn">console</span>.<span class="fn">log</span>(nums[i]);
}
<span class="cm">// 10   20   30</span></div>
          <p>También existe la versión moderna con <code style="color:#61AFEF">forEach</code>:</p>
          <div class="code-snippet">nums.<span class="fn">forEach</span>(<span class="kw">function</span>(n) {
  <span class="fn">console</span>.<span class="fn">log</span>(n);
});</div>
          <div class="key-idea">for (inicio; condición; incremento) { ... } — repite mientras condición sea true.</div>
        `,
      },
      {
        type: "exercise",
        eyebrow: "CÓDIGO FINAL · 7 MIN",
        title: "Suma todos los números",
        task: "Dado <code>const numeros = [5, 10, 15, 20, 25]</code>, usa un bucle para sumar todos los valores en una variable <code>total</code>. Imprime <code>total</code> al final. El resultado correcto es <strong>75</strong>.",
        hints: [
          "Declara antes del bucle: <code>let total = 0</code>",
          "Dentro del bucle: <code>total = total + numeros[i]</code>",
          "El bucle: <code>for (let i = 0; i < numeros.length; i++)</code>",
          "<code>console.log(total)</code> después del bucle — debe ser 75",
        ],
        starterCode: `const numeros = [5, 10, 15, 20, 25];

// Declara: let total = 0
// Bucle for sobre numeros
// Acumula cada número en total
// console.log(total) al final — debe imprimir 75
`,
        validate(code, logs) {
          if (!code.includes("total"))
            return {
              ok: false,
              msg: "❌ Necesito una variable llamada total. Declárala: let total = 0",
            };
          if (!code.includes("for") && !code.includes("forEach"))
            return {
              ok: false,
              msg: "❌ Usa un bucle for o forEach para recorrer el array.",
            };
          const numLogs = logs.filter((l) => typeof l.val === "number");
          if (numLogs.length === 0)
            return {
              ok: false,
              msg: "❌ Imprime el total al final con console.log(total).",
            };
          if (!numLogs.some((l) => l.val === 75))
            return {
              ok: false,
              msg: `❌ El total debería ser 75, pero obtuve ${numLogs[numLogs.length - 1]?.val}. ¿Estás acumulando todos los elementos?`,
            };
          return {
            ok: true,
            msg: "✓ Perfecto. 5+10+15+20+25 = 75. ¡Track de JavaScript completado!",
          };
        },
      },
    ],
  },
];

// ─── ESTADO ───────────────────────────────────────────────────────────────────

const state = {
  completed: new Set(
    JSON.parse(localStorage.getItem("praxis_prog_done") || "[]"),
  ),
  xp: parseInt(localStorage.getItem("praxis_prog_xp") || "0"),
  currentMod: null,
  currentStep: 0,
};

function save() {
  localStorage.setItem(
    "praxis_prog_done",
    JSON.stringify([...state.completed]),
  );
  localStorage.setItem("praxis_prog_xp", String(state.xp));
}

// ─── NAVEGACIÓN ───────────────────────────────────────────────────────────────

function goTo(screen, modId) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-" + screen).classList.add("active");
  window.scrollTo(0, 0);
  if (screen === "track") renderTrack();
  if (screen === "module" && modId !== undefined) {
    state.currentMod = modId;
    state.currentStep = 0;
    renderLesson();
  }
}

// ─── TRACK ────────────────────────────────────────────────────────────────────

function renderTrack() {
  const done = state.completed.size;
  document.getElementById("xp-display").textContent = `⚡ ${state.xp} XP`;
  document.getElementById("prog-txt").textContent = `${done}/5`;
  document.getElementById("prog-fill").style.width = (done / 5) * 100 + "%";

  document.getElementById("mod-list").innerHTML = MODULES.map((m, i) => {
    const isDone = state.completed.has(m.id);
    const isLocked = i > 0 && !state.completed.has(MODULES[i - 1].id);
    const cls = [
      "mod-card",
      isDone ? "done" : isLocked ? "locked" : "next",
    ].join(" ");
    const badge = isDone
      ? '<span class="mbadge mb-done">✓ Completado</span>'
      : isLocked
        ? '<span class="mbadge mb-locked">🔒 Bloqueado</span>'
        : '<span class="mbadge mb-next">→ Disponible</span>';
    const click = isLocked ? "" : `onclick="goTo('module', ${m.id})"`;
    return `<div class="${cls}" ${click}>
      <div class="mod-num">${String(m.id).padStart(2, "0")}</div>
      <div class="mod-info">
        <div class="mod-name">${m.name}</div>
        <div class="mod-meta"><span>⏱ ${m.duration}</span><span>⚡ ${m.xp} XP</span></div>
      </div>
      ${badge}
    </div>`;
  }).join("");
}

// ─── LECCIÓN ──────────────────────────────────────────────────────────────────

function renderLesson() {
  const mod = MODULES.find((m) => m.id === state.currentMod);
  document.getElementById("mod-topbar-title").textContent = mod.name;

  const total = mod.steps.length + 1;
  document.getElementById("step-dots").innerHTML = Array.from(
    { length: total },
    (_, i) => {
      const cls =
        i < state.currentStep
          ? "sdot done"
          : i === state.currentStep
            ? "sdot cur"
            : "sdot";
      return `<div class="${cls}"></div>`;
    },
  ).join("");

  const body = document.getElementById("lesson-body");
  body.innerHTML = "";

  if (state.currentStep >= mod.steps.length) {
    renderComplete(mod, body);
    return;
  }

  const step = mod.steps[state.currentStep];
  if (step.type === "concept") renderConcept(step, body);
  else renderExercise(step, body);
}

function renderConcept(step, body) {
  const wrap = document.createElement("div");
  wrap.className = "concept-wrap";
  wrap.innerHTML = `
    <div class="c-eyebrow">${step.eyebrow}</div>
    <h2 class="c-title">${step.title}</h2>
    <div class="c-timer">⏱ 2 min de lectura</div>
    <div class="concept-card">${step.content}</div>
    <button class="c-next-btn" onclick="advanceStep()">Ir al reto de código →</button>
  `;
  body.appendChild(wrap);
}

function renderExercise(step, body) {
  const wrap = document.createElement("div");
  wrap.className = "exercise-wrap";

  const hintsHtml = step.hints
    .map(
      (h) =>
        `<div class="hint"><em class="hint-icon">›</em><span>${h}</span></div>`,
    )
    .join("");

  wrap.innerHTML = `
    <div class="ex-left">
      <div class="ex-left-top">
        <div class="phase-label">${step.eyebrow}</div>
        <div class="ex-title">${step.title}</div>
        <div class="task-box"><strong>Tarea</strong>${step.task}</div>
      </div>
      <div class="hints">
        <div class="hint-label">Pistas</div>
        ${hintsHtml}
      </div>
      <div class="ex-feedback" id="ex-feedback"></div>
    </div>
    <div class="ex-right">
      <div class="editor-topbar">
        <div class="editor-lang">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          JavaScript
        </div>
        <div class="editor-actions" id="editor-actions">
          <button class="btn-reset" onclick="resetCode()">↺ Reset</button>
          <button class="btn-run" id="btn-run" onclick="runCode()">▶ Ejecutar</button>
        </div>
      </div>
      <div class="code-area-wrap">
        <div class="line-numbers" id="line-numbers">1</div>
        <textarea class="code-editor" id="code-editor" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off">${step.starterCode}</textarea>
      </div>
      <div class="console">
        <div class="console-header">
          <div class="console-dot"></div>
          <span>CONSOLA</span>
        </div>
        <div class="console-output" id="console-output">
          <span class="log-line sys">// Presiona ▶ Ejecutar para ver el resultado</span>
        </div>
      </div>
    </div>
  `;

  body.appendChild(wrap);
  window._currentStep = step;
  window._starterCode = step.starterCode;
  setupEditor();
}

function setupEditor() {
  const ta = document.getElementById("code-editor");
  const ln = document.getElementById("line-numbers");

  function updateLines() {
    const count = ta.value.split("\n").length;
    ln.textContent = Array.from({ length: count }, (_, i) => i + 1).join("\n");
    ln.scrollTop = ta.scrollTop;
  }

  ta.addEventListener("input", updateLines);
  ta.addEventListener("scroll", () => {
    ln.scrollTop = ta.scrollTop;
  });
  ta.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const s = ta.selectionStart;
      ta.value =
        ta.value.substring(0, s) + "  " + ta.value.substring(ta.selectionEnd);
      ta.selectionStart = ta.selectionEnd = s + 2;
      updateLines();
    }
  });

  updateLines();
}

function resetCode() {
  const ta = document.getElementById("code-editor");
  ta.value = window._starterCode;
  ta.dispatchEvent(new Event("input"));
  document.getElementById("console-output").innerHTML =
    '<span class="log-line sys">// Código reseteado</span>';
  document.getElementById("ex-feedback").className = "ex-feedback";
  // Remove continue btn if present
  const cb = document.getElementById("btn-continue");
  if (cb) cb.remove();
  document.getElementById("btn-run").textContent = "▶ Ejecutar";
  document.getElementById("btn-run").className = "btn-run";
  document.getElementById("btn-run").onclick = runCode;
}

function runCode() {
  const code = document.getElementById("code-editor").value;
  const out = document.getElementById("console-output");
  const fb = document.getElementById("ex-feedback");

  const logs = [];
  const lines = [];

  const safeConsole = {
    log: (...args) => {
      args.forEach((a) => {
        const display = typeof a === "object" ? JSON.stringify(a) : String(a);
        logs.push({ val: a });
        lines.push(`<span class="log-line">&gt; ${esc(display)}</span>`);
      });
    },
  };

  try {
    new Function("console", code)(safeConsole);
    out.innerHTML = lines.length
      ? lines.join("")
      : '<span class="log-line sys">// Sin salida — añade console.log</span>';

    const result = window._currentStep.validate(code, logs);
    fb.className = "ex-feedback show " + (result.ok ? "ok" : "fail");
    fb.textContent = result.msg;

    if (result.ok) {
      // Show continue button
      if (!document.getElementById("btn-continue")) {
        const cb = document.createElement("button");
        cb.id = "btn-continue";
        cb.className = "btn-run success-btn";
        cb.textContent = "Continuar →";
        cb.onclick = advanceStep;
        document.getElementById("editor-actions").appendChild(cb);
        document.getElementById("btn-run").textContent = "✓ OK";
      }
    }
  } catch (err) {
    out.innerHTML = `<span class="log-line err">SyntaxError: ${esc(err.message)}</span>`;
    fb.className = "ex-feedback show fail";
    fb.textContent = `❌ Error: ${err.message}`;
  }
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function advanceStep() {
  const mod = MODULES.find((m) => m.id === state.currentMod);
  state.currentStep++;
  if (state.currentStep >= mod.steps.length && !state.completed.has(mod.id)) {
    state.completed.add(mod.id);
    state.xp += mod.xp;
    save();
  }
  renderLesson();
}

function renderComplete(mod, body) {
  const nextMod = MODULES.find((m) => m.id === mod.id + 1);
  const isLast = mod.id === MODULES.length;

  const nextBtn = isLast
    ? `<button class="btn-next-mod green" onclick="goTo('track')">🏆 Ver mi progreso</button>`
    : `<button class="btn-next-mod" onclick="goTo('module', ${mod.id + 1})">Módulo ${mod.id + 1}: ${nextMod.name} →</button>`;

  const wrap = document.createElement("div");
  wrap.className = "complete-wrap";
  wrap.innerHTML = `
    <div class="complete-inner">
      <div class="complete-icon">${isLast ? "🏆" : "✅"}</div>
      <div class="complete-h">${isLast ? "¡Track listo!" : "¡Módulo listo!"}</div>
      <p class="complete-p">${
        isLast
          ? "Completaste los 5 módulos. Ahora sabes variables, funciones, condicionales, arrays y bucles en JavaScript."
          : "Código validado. Concepto aplicado. Siguiente módulo desbloqueado."
      }</p>
      <div class="xp-pill">⚡ +${mod.xp} XP · Total: ${state.xp} XP</div>
      <div class="complete-actions">
        ${nextBtn}
        <button class="btn-ghost" onclick="goTo('track')">← Volver al track</button>
      </div>
    </div>
  `;
  body.appendChild(wrap);
}

// Init
renderTrack();
