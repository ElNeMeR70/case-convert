#!/usr/bin/env node
// case-convert - zero-dependency developer tool
const [m,...r]=process.argv.slice(2);const w=r.join(" ").replace(/([a-z0-9])([A-Z])/g,"$1 $2").split(/[\s_\-]+/).filter(Boolean).map(x=>x.toLowerCase());
const cap=x=>x[0].toUpperCase()+x.slice(1);
const f={camel:()=>w[0]+w.slice(1).map(cap).join(""),pascal:()=>w.map(cap).join(""),snake:()=>w.join("_"),kebab:()=>w.join("-"),constant:()=>w.join("_").toUpperCase(),title:()=>w.map(cap).join(" ")};
if(!f[m]){console.error("usage: case-convert <camel|pascal|snake|kebab|constant|title> <text>");process.exit(1)}console.log(f[m]())
