import React, { useEffect, useState } from "react";
import Editor from "./editor";
import DraggableDragList from "./DraggableDragList";
import { FiCodesandbox } from "react-icons/fi";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function CombinedEditor() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setsrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(html)
      console.log(css);
      var updatedStyle = html.replace('<style></style>',`<style>${css}</style>`);
      console.log(updatedStyle)
      setsrcDoc(updatedStyle);
      var updatedScript = updatedStyle.replace('<script><script>',`<script>${js}</script>`);
      setsrcDoc(updatedScript); 
      
      // a = a.replace(/hello/g,"hello world");
      // console.log('srcDoc')
      // console.log(srcDoc)
      console.log('srcDoc')
      console.log(srcDoc)
    //   setsrcDoc(`
    // <html>
    // <body>${html}</body>
    // <style>${css}</style>
    // <script>${js}</script>
    // </html>`);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <>
      <div className="panel top-panel">
        <Grid container>
          <Grid container>
            <Grid item xs={12} sm={7}>
              <Box display="flex" flexDirection="row">
                <Box>
                  <FiCodesandbox
                    className="para1"
                    style={{ marginTop: 12, marginLeft: 10 }}
                  />
                </Box>
                <Box>
                  <h1 className="para" style={{ marginTop: 15, marginLeft: 10 }}>
                    Code The Builder
                  </h1>
                  <p style={{ color: 'white' }}>Like Bob, but not quite</p>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
          <DraggableDragList 
              title="HTML"
              language="xml"
              onChange={setHtml}
            />
            {/* <DraggableEditor
              title="HTML"
              language="xml"
              value={html}
              onChange={setHtml}
            /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Editor title="CSS" language="css" value={css} onChange={setCss} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Editor
              title="JS"
              language="javascript"
              value={js}
              onChange={setJs}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ backgroundColor: "hsl(225, 6%, 25%)", padding: 20 }}>
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="300px"
                overflow="scroll"
                style={{
                  backgroundColor: "white",
                  outline: "none",
                  border: "none",
                  borderRadius: 10
                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CombinedEditor;