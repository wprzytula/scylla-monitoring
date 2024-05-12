Search.setIndex({"docnames": ["_common/monitor-description", "advisor", "alerting", "cql_optimization", "docker_compose", "index", "matrix", "min-prod-hw", "monitor_troubleshoot", "monitor_without_docker", "monitoring_apis", "monitoring_stack", "start_all", "thanos", "updating_dashboard"], "filenames": ["_common/monitor-description.rst", "advisor.rst", "alerting.rst", "cql_optimization.rst", "docker_compose.rst", "index.rst", "matrix.rst", "min-prod-hw.rst", "monitor_troubleshoot.rst", "monitor_without_docker.rst", "monitoring_apis.rst", "monitoring_stack.rst", "start_all.rst", "thanos.rst", "updating_dashboard.rst"], "titles": ["&lt;no title&gt;", "Scylla Monitoring Stack Advisor", "Alerting", "The CQL Optimization", "Using Docker Compose", "Scylla Monitoring Stack", "Scylla Monitoring Stack Support Matrix", "Minimal Production System Recommendations", "Troubleshoot Scylla Monitoring Stack", "Deploying Scylla Monitoring Stack Without Docker", "Scylla Monitoring Stack Interfaces", "Install Scylla Monitoring Stack", "The start-all.sh command", "Using Thanos as Data Source With Scylla Monitoring Stack", "Adding and Modifying Dashboards"], "terms": {"3": [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14], "6": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "scylla": [0, 2, 3, 4, 7, 12, 14], "monitor": [0, 2, 3, 4, 7, 12, 14], "stack": [0, 3, 4, 12, 14], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "full": [0, 2, 5, 11], "alert": [0, 5, 9, 11], "The": [0, 2, 4, 5, 6, 7, 8, 9, 11, 13], "contain": [0, 3, 4, 5, 11, 12, 13, 14], "open": [0, 5, 6, 9, 10, 11], "sourc": [0, 2, 5, 6, 9, 11], "tool": [0, 3, 5, 8], "includ": [0, 5, 9], "prometheu": [0, 3, 5, 6, 8, 14], "grafana": [0, 2, 5, 13], "well": [0, 5, 11], "custom": [0, 5], "dashboard": [0, 1, 2, 3, 5, 6, 8, 9, 12], "an": [1, 3, 4, 7, 8, 9, 12, 13, 14], "element": [1, 14], "recogn": 1, "bad": 1, "practic": 1, "configur": [1, 2, 4, 8, 9, 10, 12, 14], "potenti": [1, 3], "problem": [1, 2, 3], "advis": [1, 4], "how": [1, 2, 3, 12, 13, 14], "solv": 1, "them": [1, 2, 9, 12, 14], "locat": [1, 2, 4, 12], "overview": [1, 2], "consist": [1, 2, 5], "two": [1, 3, 4, 10, 11, 12, 13], "part": [1, 2, 3, 11], "On": [1, 8], "left": 1, "issu": [1, 3, 14], "tabl": [1, 2, 3, 6, 11], "each": [1, 2, 3, 6, 7, 8, 9, 12, 13, 14], "ha": [1, 2, 3, 7, 8, 9, 11, 12, 14], "categori": [1, 3], "link": [1, 14], "jump": 1, "relev": [1, 12], "descript": [1, 2], "For": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14], "exampl": [1, 2, 3, 4, 7, 8, 9, 11, 12, 13], "could": [1, 3, 13], "warn": 1, "about": [1, 2, 9, 14], "us": [1, 2, 3, 5, 7, 8, 9, 12], "larg": [1, 14], "cell": 1, "data": [1, 2, 3, 9, 12, 14], "usual": [1, 3, 8, 14], "indic": [1, 3], "model": [1, 3], "client": [1, 3], "code": 1, "can": [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14], "impact": 1, "system": [1, 2, 3, 4, 12], "perform": [1, 3, 7, 9, 11], "right": [1, 3, 9, 11, 14], "balanc": [1, 3], "thi": [1, 2, 3, 4, 7, 8, 9, 11, 12, 13, 14], "notifi": [1, 2], "you": [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14], "imbal": 1, "between": [1, 3, 8, 13], "shard": 1, "node": [1, 3, 6, 7, 8, 9, 12], "imbalanc": 1, "mai": [1, 3, 8], "when": [1, 3, 4, 7, 8, 9, 11, 12, 13, 14], "singl": [1, 13, 14], "hot": 1, "partit": 1, "get": [1, 2, 3, 5, 11, 13, 14], "most": [1, 2, 3, 9, 14], "request": [1, 10, 12], "make": [1, 2, 3, 4, 8, 9, 11, 12, 13, 14], "one": [1, 3, 4, 10, 11, 12], "bottleneck": 1, "latenc": [1, 3], "cach": 1, "hit": 1, "ar": [1, 2, 3, 4, 8, 9, 11, 12, 13, 14], "enhanc": 2, "someth": [2, 12, 14], "wrong": [2, 3, 8, 14], "read": [2, 4, 8, 11, 13], "more": [2, 3, 4, 8, 10, 11, 14], "here": [2, 5, 9, 11, 12, 14], "By": [2, 3, 9, 10, 11, 12, 14], "default": [2, 3, 7, 8, 9, 10, 11, 12, 14], "shown": [2, 8], "also": [2, 11, 12, 13, 14], "sent": 2, "other": [2, 4, 13], "extern": [2, 3, 4, 8, 9, 12, 13, 14], "like": [2, 3, 7, 8, 9, 11, 13, 14], "email": 2, "slack": 2, "In": [2, 3, 4, 8, 11, 14], "gener": [2, 3, 4, 11], "specif": [2, 3, 8, 10, 12], "condit": 2, "met": 2, "within": [2, 11], "certain": 2, "period": [2, 7, 9, 11, 13], "time": [2, 3, 7, 9, 11, 12, 13], "thei": [2, 12], "send": [2, 3, 11], "act": [2, 11, 13], "so": [2, 3, 8, 11, 12, 13, 14], "activ": [2, 11], "defin": [2, 3, 14], "rule": [2, 4, 9, 12], "yml": [2, 3, 4, 8, 9, 11, 12, 13], "file": [2, 9, 10, 12, 13, 14], "directori": [2, 4, 9, 12, 13, 14], "name": [2, 3, 8, 9, 11, 13], "what": 2, "happen": [2, 8], "long": [2, 13], "report": [2, 3, 6, 8], "let": 2, "u": 2, "look": [2, 3, 11, 13, 14], "instancedown": 2, "come": [2, 12], "expr": [2, 14], "up": [2, 3, 4, 8, 9], "0": [2, 4, 6, 9, 10, 11, 12, 13, 14], "60": 2, "label": [2, 9, 11, 13], "sever": 2, "2": [2, 4, 6, 7, 9, 11, 12, 14], "annot": 2, "instanc": [2, 9, 11, 14], "been": 2, "down": [2, 4, 8], "than": [2, 3, 11, 14], "30": [2, 12], "second": [2, 8, 9, 11], "summari": 2, "legal": 2, "express": 2, "case": [2, 3, 7, 8, 9, 11, 12, 13, 14], "metric": [2, 3, 5, 6, 7, 9, 11, 12, 13, 14], "equal": 2, "set": [2, 9, 10, 11, 12, 14], "minim": 2, "durat": 2, "befor": [2, 3, 9, 11], "prior": 2, "pend": 2, "mode": [2, 14], "hold": [2, 3, 7, 9, 11], "addit": [2, 3, 12], "special": 2, "add": [2, 3, 9, 10, 12, 13, 14], "notif": 2, "forward": 2, "from": [2, 3, 4, 8, 9, 12, 13], "server": [2, 3, 4, 5, 9, 10, 11, 12, 13, 14], "respons": 2, "duplic": [2, 3], "group": [2, 11], "rout": [2, 3], "found": [2, 9, 11, 12, 14], "rule_config": [2, 4, 9, 12], "three": [2, 5, 11], "repres": 2, "tree": 2, "win": [2, 8], "inhibit": 2, "mute": 2, "base": [2, 3, 4, 9, 11, 12, 13, 14], "anoth": [2, 12], "receiv": [2, 3], "via": [2, 8], "sluck": 2, "etc": [2, 4, 9, 11, 12, 14], "check": [2, 3, 8], "document": [2, 8, 11, 13, 14], "detail": 2, "specifi": [2, 4, 8, 11, 12, 14], "It": [2, 4, 10, 11, 12, 14], "": [2, 3, 11, 12, 14], "wors": 2, "have": [2, 4, 7, 8, 9, 11, 12, 13, 14], "doe": [2, 3, 7, 8, 9, 11, 12, 13, 14], "work": [2, 11, 12, 13, 14], "all": [2, 3, 4, 5, 8, 10, 11, 13, 14], "There": [2, 9, 11, 13, 14], "multipl": [2, 3, 11, 12, 13, 14], "wai": [2, 3, 4, 8, 12], "sure": [2, 3, 4, 8, 9, 11, 13, 14], "your": [2, 3, 4, 8, 9, 10, 11, 12, 13, 14], "correctli": [2, 14], "start": [2, 5, 9, 13, 14], "path": [2, 4, 9, 11, 12, 13], "mail": 2, "simpl": 2, "negat": 2, "logic": 2, "forc": 2, "reduc": [2, 14], "limit": [2, 3, 11, 13], "possibl": [2, 3, 10, 12], "simul": 2, "actual": 2, "scenario": 2, "see": [2, 3, 4, 5, 7, 8, 9, 10, 11, 14], "expect": 2, "low": [2, 3], "avail": [2, 3, 9, 11, 13, 14], "disk": [2, 8, 12, 14], "space": 2, "assum": [2, 7, 9, 11, 12, 13], "want": [2, 11], "lower": [2, 3], "10": [2, 11, 14], "fire": 2, "That": [2, 12, 14], "would": [2, 3, 9, 11, 13, 14], "show": [2, 3, 6, 14], "propag": 2, "ani": [2, 3, 8, 9, 11, 14], "valu": [2, 3, 14], "similar": [2, 14], "current": [2, 8, 9, 11, 12, 14], "situat": [2, 3, 11, 12], "now": [2, 13], "free": 2, "below": [2, 4, 10, 11], "creat": [2, 3, 4, 8, 9, 11, 12, 14], "some": [2, 13], "big": [2, 3], "help": [2, 3, 9, 12, 14], "bisect": 2, "identifi": 3, "driver": 3, "upper": 3, "relat": 3, "gaug": 3, "graph": [3, 14], "inspect": 3, "we": [3, 7, 9, 11, 13, 14], "zero": 3, "besid": [3, 12], "intern": [3, 14], "which": [3, 4, 6, 13, 14], "mislead": 3, "test": [3, 8, 9], "traffic": [3, 8, 13], "follow": [3, 4, 6, 7, 8, 9, 11, 12, 14], "section": [3, 7, 8, 9, 11], "describ": [3, 8, 10, 11, 13], "panel": 3, "first": 3, "templat": [3, 8, 9, 11, 13], "place": [3, 11, 12, 13, 14], "holder": 3, "differ": [3, 4, 9, 11, 12, 13, 14], "benefit": [3, 13], "databas": [3, 4, 9, 12], "onli": [3, 11, 12], "need": [3, 7, 8, 9, 11, 12, 13, 14], "pars": [3, 14], "onc": [3, 4], "safer": 3, "prevent": 3, "inject": 3, "non": [3, 8], "percentag": [3, 14], "rate": 3, "both": [3, 4, 8, 9, 11], "distribut": 3, "where": [3, 4, 8, 9, 11, 14], "rang": [3, 8], "ring": 3, "ideal": 3, "reach": [3, 11, 13], "replica": [3, 13], "fail": 3, "do": [3, 8, 11, 12, 14], "mean": [3, 12, 14], "coordin": 3, "result": [3, 11, 12], "higher": [3, 9, 11], "increas": 3, "resourc": 3, "usag": [3, 8], "typic": [3, 9, 14], "know": [3, 8, 11], "replic": 3, "load": [3, 8, 9, 11], "caus": 3, "did": 3, "break": [3, 14], "chunk": 3, "repli": 3, "size": [3, 14], "requir": [3, 4, 13], "return": [3, 8], "overal": 3, "should": [3, 4, 8, 9, 11, 13, 14], "avoid": [3, 8, 11, 14], "support": [3, 5, 11, 14], "compound": 3, "primari": 3, "kei": 3, "cluster": [3, 7, 9, 11], "column": 3, "kind": 3, "effici": 3, "sort": [3, 14], "order": 3, "BY": 3, "wa": [3, 14], "ineffici": 3, "ks1": 3, "table_demo": 3, "text": 3, "type": [3, 9, 14], "int": 3, "WITH": 3, "desc": 3, "select": 3, "cat1": 3, "asc": 3, "side": 3, "user": [3, 4, 9, 11, 12], "overhead": 3, "These": 3, "care": 3, "thing": 3, "mani": 3, "exist": [3, 11, 14], "much": 3, "drop": 3, "row": [3, 14], "were": 3, "match": [3, 11], "reason": [3, 8, 13, 14], "A": [3, 12, 13, 14], "determin": 3, "common": [3, 12], "quorum": 3, "major": 3, "success": 3, "hurt": 3, "persist": [3, 4, 7, 9, 11, 12], "lost": [3, 11, 12, 14], "cl": 3, "unavail": 3, "oper": 3, "expens": 3, "term": 3, "cost": 3, "ONE": 3, "end": [3, 9, 11], "local": [3, 8, 9, 11, 12, 13, 14], "local_quorum": 3, "local_on": 3, "instead": [3, 9, 11, 13], "reli": 3, "definit": [3, 14], "per": [3, 7, 9, 11, 13], "center": [3, 9, 11, 13], "scylla_serv": [3, 4, 8, 9, 11], "If": [3, 8, 9, 11, 12, 13, 14], "nearest": 3, "sh": [4, 5, 8, 11], "kill": [4, 8, 11], "script": [4, 5, 11, 12, 14], "altern": [4, 11], "method": [4, 11], "manual": [4, 8], "step": [4, 8, 9, 13, 14], "simplifi": 4, "start_al": 4, "launch": 4, "particular": 4, "updat": [4, 8, 9, 14], "ignor": [4, 12], "instal": [4, 5, 8], "among": 4, "ip": [4, 8, 9, 10, 11, 12, 13], "address": [4, 8, 9, 10, 11, 12, 13], "alertmanag": [4, 5, 12], "either": [4, 11], "consul": [4, 12], "manag": [4, 5, 6, 9], "config": [4, 9, 12], "product": [4, 12], "accordingli": 4, "its": [4, 11, 12, 13, 14], "note": [4, 8, 9, 11, 12], "latter": 4, "tell": 4, "themselv": [4, 14], "run": [4, 5, 6, 8, 9, 11, 12, 13, 14], "command": [4, 8, 11, 13], "datasourc": [4, 9, 11, 13, 14], "under": [4, 9, 11], "yaml": [4, 9, 10, 11], "To": [4, 7, 9, 10, 11, 14], "sashboard": 4, "t": [4, 14], "line": [4, 11, 12, 13, 14], "flag": [4, 8, 11, 12, 13, 14], "v": [4, 8, 11, 12, 13, 14], "version": [4, 5, 6, 8, 9, 12, 14], "enterpris": [4, 6, 11, 14], "2020": [4, 6, 11, 14], "1": [4, 6, 9, 11, 12, 13, 14], "pass": [4, 11, 12], "call": [4, 11, 12], "servic": [4, 8, 9, 11, 12], "container_nam": 4, "aalert": 4, "imag": [4, 8], "prom": [4, 8, 13], "v0": [4, 9], "21": 4, "port": [4, 8, 9, 10, 11, 12], "9093": [4, 9], "volum": [4, 7, 9, 11], "agraf": 4, "environ": [4, 12], "gf_panels_disable_sanitize_html": 4, "true": [4, 14], "gf_paths_provis": 4, "var": [4, 9], "lib": [4, 9], "gf_plugins_allow_loading_unsigned_plugin": 4, "scylladb": [4, 9, 11], "secur": 4, "gf_auth_basic_en": 4, "fals": [4, 9, 14], "gf_auth_anonymous_en": 4, "gf_auth_anonymous_org_rol": 4, "admin": [4, 11, 12], "gf_security_admin_password": 4, "7": [4, 9, 11, 14], "5": [4, 6, 7, 8, 9, 11, 14], "3000": [4, 9, 11], "1000": 4, "build": [4, 9], "plugin": [4, 9], "uncom": [4, 11], "dir": [4, 12, 13], "loki": [4, 11], "mnt": 4, "3100": 4, "conf": [4, 9, 11], "promotheu": 4, "aprom": [4, 8], "v2": [4, 9], "18": [4, 9], "9090": [4, 8, 9, 13], "d": [4, 11, 12, 13], "scylla_manager_serv": [4, 8, 9, 11], "node_exporter_serv": [4, 9, 11], "promtail": 4, "1514": [4, 11], "9080": 4, "promtail_config": 4, "older": 5, "compon": 5, "wrap": 5, "docker": [5, 8, 12, 13], "collect": [5, 11, 12, 13], "store": [5, 9, 13, 14], "handl": [5, 11, 12], "choos": [5, 8], "topic": 5, "compos": 5, "interfac": [5, 8], "deploi": [5, 11], "without": [5, 11, 12, 14], "troubleshoot": 5, "guid": [5, 8, 11], "integr": 5, "upgrad": 5, "advisor": 5, "ad": [5, 7, 9, 11, 12], "modifi": 5, "thano": 5, "matrix": 5, "lesson": 5, "univers": 5, "node_export": [6, 8, 9, 11, 12], "4": [6, 9, 11, 14], "2019": [6, 11], "17": [6, 8, 9, 11], "2018": 6, "14": [6, 8], "agent": [6, 8, 11, 12, 13], "o": [6, 12], "cpu": [7, 9, 11], "least": [7, 9, 11], "physic": [7, 9, 11], "core": [7, 9, 11], "4vcpu": [7, 9, 11], "memori": [7, 9, 11], "15gb": [7, 9, 11], "dram": [7, 9, 11], "storag": [7, 9, 11, 12, 14], "proport": [7, 9, 11], "number": [7, 9, 11, 13], "retent": [7, 9, 11], "network": [7, 8, 9, 11, 12], "1gbe": [7, 9, 11], "10gbe": [7, 9, 11], "prefer": [7, 8, 9, 11], "block": [7, 9, 11], "ec2": [7, 9, 11], "eb": [7, 9, 11], "15": [7, 9, 11], "dai": [7, 9, 11, 12], "around": [7, 8, 9, 11], "200mb": [7, 9, 11], "scrape": [7, 9, 11], "interv": [7, 9, 11], "16": [7, 8, 9, 11], "20gb": [7, 9, 11], "account": [7, 9, 11], "unexpect": [7, 9, 11], "event": [7, 9, 11], "replac": [7, 9, 11, 13, 14], "alloc": [7, 9, 11], "x4": [7, 9, 11], "100gb": [7, 9, 11], "fast": [7, 9, 11], "enough": [7, 9, 11], "provid": [7, 9, 11, 13], "out": [7, 9, 11, 13], "box": [7, 9, 11, 13], "done": [8, 11, 12, 14], "chang": [8, 10, 12, 14], "56090": [8, 9], "5090": [8, 11], "backward": [8, 14], "compat": [8, 14], "old": 8, "new": [8, 11], "howev": 8, "twice": 8, "easiest": 8, "edit": [8, 9, 11, 12, 13, 14], "remov": 8, "scylla_manager1": 8, "job": [8, 11], "take": [8, 11, 12, 14], "effect": [8, 11, 14], "messag": 8, "wait": 8, "log": [8, 11, 13], "failur": [8, 12], "root": [8, 11], "post": 8, "becaus": [8, 12], "own": [8, 11, 12], "proper": 8, "past": 8, "ownership": 8, "cento": [8, 9], "l": [8, 11, 12], "la": 8, "grep": 8, "drwxr": 8, "xr": 8, "x": [8, 14], "4096": 8, "jun": 8, "25": 8, "51": 8, "sudo": [8, 9, 11], "chown": 8, "r": [8, 9, 12, 14], "appear": 8, "unreach": 8, "immedi": 8, "suspect": 8, "connect": [8, 10, 13, 14], "login": [8, 11], "consol": [8, 9], "browser": [8, 9, 11, 13, 14], "http": [8, 9, 11, 13], "go": [8, 11], "target": [8, 9, 10, 12, 14], "tab": 8, "127": [8, 9, 12], "insid": [8, 9, 11, 12, 14], "host": [8, 9, 11, 12], "try": [8, 9], "enabl": [8, 11, 13], "confirm": 8, "pull": [8, 11], "align": 8, "option": [8, 11, 13], "procedur": [8, 9, 11], "p": [8, 9, 12, 13], "id": [8, 14], "statu": [8, 11], "41bd3db26240": 8, "entrypoin": 8, "ago": 8, "23": 8, "7000": [8, 11], "7001": 8, "tcp": 8, "9042": 8, "9160": 8, "9180": [8, 9, 10, 11], "10000": 8, "gui": [8, 12, 14], "click": 8, "fetch": 8, "curl": 8, "scylla_nod": 8, "binari": [8, 11], "firewal": [8, 11], "172": [8, 9, 11], "machin": [8, 11, 12], "ef": 8, "gre": 8, "scylla_setup": 8, "9100": 8, "pleas": [8, 9], "while": 8, "captur": 8, "tshark": 8, "f": 8, "dst": 8, "eth0": 8, "toward": 8, "199": 8, "203": 8, "229": 8, "89": 8, "12": [8, 14], "142": 8, "66": [8, 9], "59212": 8, "ack": 8, "seq": 8, "317": 8, "78193": 8, "158080": 8, "len": 8, "tsval": 8, "79869679": 8, "tsecr": 8, "3347447210": 8, "74": 8, "60440": 8, "syn": 8, "29200": 8, "mss": 8, "1460": 8, "sack_perm": 8, "79988291": 8, "w": [8, 14], "128": 8, "instruct": [9, 11], "main": 9, "item": 9, "indefinit": 9, "accru": 9, "solut": [9, 13], "churn": 9, "download": [9, 11], "latest": [9, 11, 12], "releas": 9, "wget": [9, 11], "github": [9, 11], "com": [9, 11], "archiv": [9, 11], "tar": [9, 11], "gz": [9, 11], "xvf": [9, 11], "20": 9, "linux": 9, "amd64": 9, "copi": 9, "cp": 9, "home": 9, "cd": [9, 11], "verifi": 9, "point": [9, 11, 14], "192": [9, 11], "168": [9, 11], "135": 9, "166": 9, "correct": 9, "static": 9, "honor_label": 9, "paramet": [9, 12], "vi": 9, "alertmang": 9, "am_address": 9, "same": [9, 11], "static_config": [9, 11], "manager_ag": 9, "global": [9, 11], "scrape_interv": [9, 11], "everi": [9, 11, 12], "scrape_timeout": 9, "timeout": 9, "scape": 9, "again": [9, 11], "attach": 9, "seri": [9, 13], "commun": 9, "feder": 9, "remot": 9, "external_label": 9, "scrape_config": 9, "job_nam": [9, 11], "file_sd_config": 9, "relabel_config": 9, "source_label": 9, "__address__": 9, "regex": 9, "target_label": 9, "those": 9, "must": [9, 11], "even": [9, 11, 12], "cat": 9, "list": [9, 11], "244": 9, "cluster1": [9, 11], "dc": [9, 11, 13], "dc1": [9, 11], "dc2": [9, 11], "previou": 9, "deprec": 9, "mkdir": 9, "mydata": 9, "tsdb": [9, 12, 13], "accumul": 9, "visibl": 9, "execut": 9, "queri": 9, "through": 9, "node_memory_memfre": 9, "And": 9, "scylla_reactor_util": 9, "At": [9, 14], "emit": 9, "abl": [9, 13], "grafna": 9, "depend": [9, 13], "repositori": [9, 11], "yum": 9, "zip": 9, "structur": 9, "rest": [9, 13], "access": [9, 12], "packag": 9, "public": 9, "app": 9, "provis": [9, 11, 14], "manager_2": 9, "ver_4": 9, "folder": 9, "apivers": 9, "url": [9, 13], "167": 9, "proxi": 9, "basicauth": 9, "camptocamp": 9, "orgid": 9, "typelogourl": 9, "img": 9, "icn": 9, "svg": 9, "password": [9, 11, 12], "isdefault": 9, "jsondata": 9, "severity_crit": 9, "severity_high": 9, "severity_warn": 9, "severity_info": 9, "sampl": 9, "ini": 9, "reflect": 9, "bin": 9, "assumpt": 9, "colloc": 9, "expos": [10, 13], "onlin": 10, "listen": [10, 11, 12], "inform": [10, 11, 12, 14], "api": [10, 12, 13], "disabl": [10, 11], "prometheus_port": 10, "bind": [10, 12], "restrict": 10, "prometheus_address": 10, "setup": 11, "dedic": 11, "over": 11, "evalu": 11, "laptop": 11, "groupadd": 11, "next": [11, 12, 13], "usermod": 11, "ag": 11, "systemctl": 11, "extract": 11, "As": [11, 14], "clone": 11, "git": 11, "directli": 11, "checkout": 11, "branch": 11, "restart": [11, 12, 13], "wish": [11, 12], "import": [11, 12], "datacent": 11, "nodetool": 11, "valid": 11, "ipv6": 11, "squar": 11, "bracket": 11, "2600": 11, "1f18": 11, "26b1": 11, "3a00": 11, "fac8": 11, "118e": 11, "9199": 11, "67b9": 11, "67ba": 11, "web": [11, 13], "overrid": [11, 12, 14], "n": [11, 12], "my_scylla_serv": 11, "prometheus_data": 11, "mark": 11, "seen": 11, "genconfig": 11, "py": [11, 14], "myconf": 11, "four": 11, "OR": 11, "cql": 11, "protect": 11, "author": [11, 12], "assign": 11, "keyspac": 11, "securejsondata": 11, "outsid": [11, 12], "permiss": 11, "somewher": 11, "els": [11, 12], "myservic": 11, "m": [11, 12], "function": [11, 13], "featur": [11, 13], "direct": 11, "programnam": 11, "rsyslog_syslogprotocol23format": 11, "authent": [11, 12], "simplest": 12, "small": 12, "util": [12, 14], "appropri": 12, "h": [12, 14], "print": 12, "exit": 12, "applic": 12, "localhost": 12, "cannot": 12, "map": 12, "explicit": 12, "encapsul": 12, "param": 12, "allow": 12, "auto": 12, "automat": 12, "g": 12, "keep": 12, "clear": 12, "comma": 12, "separ": 12, "j": 12, "c": 12, "variabl": 12, "alter": 12, "q": 12, "anonym": 12, "role": 12, "privileg": 12, "behavior": 12, "editor": 12, "viewer": 12, "suppli": [12, 14], "b": 12, "resolv": 12, "explicitli": [12, 14], "week": 12, "opportun": 12, "demonstr": 12, "cover": 12, "30d": 12, "arbitrari": 12, "opensourc": 13, "top": 13, "additiuon": 13, "high": [13, 14], "horizont": 13, "scale": 13, "backup": 13, "flexibl": 13, "design": 13, "front": 13, "few": 13, "why": [13, 14], "total": [13, 14], "million": 13, "capac": 13, "sometim": 13, "reachabl": 13, "lifecycl": 13, "z": 13, "thanosio": 13, "grpc": 13, "10911": 13, "grace": 13, "10912": 13, "after": [13, 14], "togeth": 13, "ip1": 13, "ip2": 13, "debug": 13, "query0": 13, "level": 13, "10903": 13, "10904": 13, "abov": 13, "last": 13, "db_address": 13, "explain": 14, "whenev": 14, "gone": 14, "save": 14, "mention": 14, "earlier": 14, "overridden": 14, "perman": 14, "eventu": 14, "made": 14, "suggest": 14, "maintain": 14, "json": 14, "too": 14, "verbos": 14, "object": 14, "attribut": 14, "aliascolor": 14, "bar": 14, "error": 14, "fill": 14, "grid": 14, "threshold1": 14, "null": 14, "threshold1color": 14, "rgba": 14, "216": 14, "200": 14, "27": 14, "threshold2": 14, "threshold2color": 14, "234": 14, "112": 14, "22": 14, "gridpo": 14, "y": 14, "isnew": 14, "legend": 14, "avg": 14, "max": 14, "min": 14, "linewidth": 14, "nullpointmod": 14, "pointradiu": 14, "render": 14, "flot": 14, "seriesoverrid": 14, "span": 14, "steppedlin": 14, "sum": 14, "node_filesystem_avail": 14, "intervalfactor": 14, "legendformat": 14, "refid": 14, "timefrom": 14, "timeshift": 14, "titl": 14, "tooltip": 14, "msresolut": 14, "share": 14, "value_typ": 14, "cumul": 14, "transpar": 14, "xaxi": 14, "yax": 14, "percent": 14, "logbas": 14, "101": 14, "short": 14, "imagin": 14, "redund": 14, "resembl": 14, "css": 14, "hierarch": 14, "inherit": 14, "base_row": 14, "collaps": 14, "height": 14, "250px": 14, "150px": 14, "output": 14, "bytes_panel": 14, "byte": 14, "unit": 14, "axi": 14, "adjust": 14, "readabl": 14, "e": 14, "gb": 14, "mb": 14, "grasp": 14, "origin": 14, "larger": 14, "longer": 14, "later": 14, "absolut": 14, "posit": 14, "ie": 14, "width": 14, "ve": 14, "had": 14, "imposs": 14, "hand": 14, "overcom": 14, "transit": 14, "calcul": 14, "taken": 14, "still": 14, "unlik": 14, "partial": 14, "24": 14, "don": 14, "python": 14, "make_dashboard": 14, "revers": 14, "easier": 14, "wrapper": 14, "re": 14, "just": 14, "refresh": 14, "generate_gener": 14, "mayb": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"scylla": [1, 5, 6, 8, 9, 10, 11, 13], "monitor": [1, 5, 6, 8, 9, 10, 11, 13], "stack": [1, 5, 6, 8, 9, 10, 11, 13], "advisor": 1, "The": [1, 3, 12, 14], "section": 1, "alert": [2, 12], "prometheu": [2, 4, 7, 9, 10, 11, 12, 13], "alertmanag": [2, 9], "tip": 2, "when": 2, "ad": [2, 14], "an": [2, 11], "cql": 3, "optim": 3, "prepar": 3, "statement": 3, "token": 3, "awar": 3, "page": 3, "queri": [3, 13], "revers": 3, "read": 3, "allow": 3, "filter": 3, "consist": [3, 14], "level": [3, 8], "cross": 3, "dc": 3, "request": 3, "us": [4, 11, 13, 14], "docker": [4, 9, 11], "compos": 4, "prerequisit": [4, 11, 14], "set": 4, "grafana": [4, 8, 9, 11, 12, 14], "provis": 4, "data": [4, 8, 11, 13], "sourc": [4, 8, 13], "file": [4, 8, 11], "dashboard": [4, 11, 14], "load": 4, "start": [4, 8, 11, 12], "stop": [4, 11], "support": [6, 12], "matrix": 6, "minim": [7, 9, 11], "product": [7, 9, 11], "system": [7, 9, 11, 14], "recommend": [7, 9, 11], "calcul": [7, 9, 11], "disk": [7, 9, 11], "space": [7, 9, 11], "requir": [7, 9, 11], "troubleshoot": 8, "problem": 8, "manag": [8, 11, 12], "2": 8, "duplic": 8, "inform": 8, "A": 8, "contain": 8, "fail": 8, "To": 8, "And": 8, "directori": [8, 11], "permiss": 8, "No": 8, "point": 8, "solut": 8, "chart": 8, "show": 8, "error": 8, "sign": 8, "server": 8, "metric": 8, "notic": 8, "user": 8, "upgrad": [8, 14], "open": 8, "3": 8, "0": 8, "enterpris": 8, "2019": 8, "1": 8, "work": 8, "wireshark": 8, "deploi": 9, "without": 9, "instal": [9, 11], "interfac": 10, "post": 11, "configur": [11, 13], "node": 11, "from": [11, 14], "consul": 11, "api": 11, "connect": 11, "extern": 11, "add": 11, "addit": 11, "target": 11, "specif": 11, "version": 11, "access": 11, "localhost": 11, "rsyslog": 11, "each": 11, "view": 11, "all": 12, "sh": [12, 14], "command": 12, "gener": [12, 14], "option": 12, "relat": 12, "ldap": 12, "retent": 12, "period": 12, "thano": 13, "With": 13, "As": 13, "aggreg": 13, "sidecar": 13, "updat": 13, "modifi": 14, "limit": 14, "between": 14, "restart": 14, "templat": 14, "class": 14, "panel": 14, "exampl": 14, "format": 14, "layout": 14, "valid": 14}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx": 60}, "alltitles": {"Scylla Monitoring Stack Advisor": [[1, "scylla-monitoring-stack-advisor"]], "The Advisor section": [[1, "the-advisor-section"]], "Alerting": [[2, "alerting"]], "Prometheus Alerts": [[2, "prometheus-alerts"]], "Alertmanager": [[2, "alertmanager"]], "Tips When Adding an Alert": [[2, "tips-when-adding-an-alert"]], "The CQL Optimization": [[3, "the-cql-optimization"]], "Prepared Statements": [[3, "prepared-statements"]], "Token Aware": [[3, "token-aware"]], "Paged Queries": [[3, "paged-queries"]], "Reversed CQL Reads": [[3, "reversed-cql-reads"]], "ALLOW FILTERING": [[3, "allow-filtering"]], "Consistency Level": [[3, "consistency-level"]], "Cross DC": [[3, "cross-dc"]], "Cross DC Consistency Level": [[3, "cross-dc-consistency-level"]], "Cross DC read requests": [[3, "cross-dc-read-requests"]], "Scylla Monitoring Stack": [[5, "scylla-monitoring-stack"]], "Using Docker Compose": [[4, "using-docker-compose"]], "Prerequisite": [[4, "prerequisite"], [14, "prerequisite"]], "Setting Prometheus": [[4, "setting-prometheus"]], "Setting Grafana Provisioning": [[4, "setting-grafana-provisioning"]], "Grafana Data-Source file": [[4, "grafana-data-source-file"]], "Grafana Dashboard Load file": [[4, "grafana-dashboard-load-file"]], "Docker Compose file": [[4, "docker-compose-file"]], "Start and Stop": [[4, "start-and-stop"]], "Minimal Production System Recommendations": [[7, "minimal-production-system-recommendations"], [11, "minimal-production-system-recommendations"], [9, "minimal-production-system-recommendations"]], "Calculating Prometheus Minimal Disk Space requirement": [[7, "calculating-prometheus-minimal-disk-space-requirement"], [11, "calculating-prometheus-minimal-disk-space-requirement"], [9, "calculating-prometheus-minimal-disk-space-requirement"]], "Troubleshoot Scylla Monitoring Stack": [[8, "troubleshoot-scylla-monitoring-stack"]], "Problem": [[8, "problem"]], "Scylla-Manager 2.2 with Duplicate information": [[8, "scylla-manager-2-2-with-duplicate-information"]], "A Container Fails To Start": [[8, "a-container-fails-to-start"]], "Files And Directory Permissions": [[8, "files-and-directory-permissions"]], "No Data Points": [[8, "no-data-points"]], "Solution": [[8, "solution"], [8, "id1"], [8, "id2"], [8, "id3"]], "Grafana Chart Shows Error (!) Sign": [[8, "grafana-chart-shows-error-sign"]], "Grafana Shows Server Level Metrics, but not Scylla Metrics": [[8, "grafana-shows-server-level-metrics-but-not-scylla-metrics"]], "Grafana Shows Scylla Metrics, but not Server Level Metrics": [[8, "grafana-shows-scylla-metrics-but-not-server-level-metrics"]], "Notice to users upgrading to Scylla Open Source 3.0 or Scylla Enterprise 2019.1": [[8, "notice-to-users-upgrading-to-scylla-open-source-3-0-or-scylla-enterprise-2019-1"]], "Working with Wireshark": [[8, "working-with-wireshark"]], "Scylla Monitoring Stack Support Matrix": [[6, "scylla-monitoring-stack-support-matrix"]], "Install Scylla Monitoring Stack": [[11, "install-scylla-monitoring-stack"], [11, "id1"], [9, "install-scylla-monitoring-stack"]], "Prerequisites": [[11, "prerequisites"]], "Docker Post Installation": [[11, "docker-post-installation"]], "Configure Scylla Monitoring Stack": [[11, "configure-scylla-monitoring-stack"]], "Configure Scylla nodes from files": [[11, "configure-scylla-nodes-from-files"]], "Configure Scylla nodes using Scylla-Manager Consul API": [[11, "configure-scylla-nodes-using-scylla-manager-consul-api"]], "Connecting Scylla-Monitoring to Scylla": [[11, "connecting-scylla-monitoring-to-scylla"]], "Use an external directory for the Prometheus data directory": [[11, "use-an-external-directory-for-the-prometheus-data-directory"]], "Add Additional Prometheus Targets": [[11, "add-additional-prometheus-targets"]], "Start and Stop Scylla Monitoring Stack": [[11, "start-and-stop-scylla-monitoring-stack"]], "Start": [[11, "start"]], "Stop": [[11, "stop"]], "Start a Specific Scylla Monitoring Stack Version": [[11, "start-a-specific-scylla-monitoring-stack-version"]], "Accessing the localhost": [[11, "accessing-the-localhost"]], "Configure rsyslog on each Scylla node": [[11, "configure-rsyslog-on-each-scylla-node"]], "View Grafana Dashboards": [[11, "view-grafana-dashboards"]], "Scylla Monitoring Stack Interfaces": [[10, "scylla-monitoring-stack-interfaces"]], "Prometheus": [[10, "prometheus"]], "Deploying Scylla Monitoring Stack Without Docker": [[9, "deploying-scylla-monitoring-stack-without-docker"]], "Install Alertmanager": [[9, "install-alertmanager"]], "Install Prometheus": [[9, "install-prometheus"]], "Install Grafana": [[9, "install-grafana"]], "Using Thanos as Data Source With Scylla Monitoring Stack": [[13, "using-thanos-as-data-source-with-scylla-monitoring-stack"]], "Using Thanos As a Prometheus Aggregator": [[13, "using-thanos-as-a-prometheus-aggregator"]], "Prometheus Configuration": [[13, "prometheus-configuration"]], "Thanos sidecar": [[13, "thanos-sidecar"]], "Thanos query": [[13, "thanos-query"]], "Update Scylla Data source": [[13, "update-scylla-data-source"]], "Adding and Modifying Dashboards": [[14, "adding-and-modifying-dashboards"]], "General Limitations": [[14, "general-limitations"]], "consistency between restarts": [[14, "consistency-between-restarts"]], "consistency between upgrades": [[14, "consistency-between-upgrades"]], "Using templated Dashboards": [[14, "using-templated-dashboards"]], "The template class system": [[14, "the-template-class-system"]], "Panel example": [[14, "panel-example"]], "Grafana Formats and Layouts": [[14, "grafana-formats-and-layouts"]], "Generating the dashboards from templates (generate-dashboards.sh)": [[14, "generating-the-dashboards-from-templates-generate-dashboards-sh"]], "Validation": [[14, "validation"]], "The start-all.sh command": [[12, "the-start-all-sh-command"]], "General Options": [[12, "general-options"]], "Grafana Related Commands": [[12, "grafana-related-commands"]], "Grafana LDAP support": [[12, "grafana-ldap-support"]], "Prometheus\u00a0Related Commands": [[12, "prometheus-related-commands"]], "Prometheus Retention Period": [[12, "prometheus-retention-period"]], "Alert Manager": [[12, "alert-manager"]]}, "indexentries": {}})