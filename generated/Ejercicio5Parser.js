// Generated from d:/Ing Sistemas/sintaxis y semant del lenguaje/Ejercicio5/Ejercicio5.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Ejercicio5Listener from './Ejercicio5Listener.js';
import Ejercicio5Visitor from './Ejercicio5Visitor.js';

const serializedATN = [4,1,19,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,3,2,31,8,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,3,5,49,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,59,8,
5,10,5,12,5,62,9,5,1,6,1,6,1,7,1,7,1,7,0,1,10,8,0,2,4,6,8,10,12,14,0,3,1,
0,11,12,1,0,13,14,1,0,15,16,67,0,17,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,
34,1,0,0,0,8,36,1,0,0,0,10,48,1,0,0,0,12,63,1,0,0,0,14,65,1,0,0,0,16,18,
3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,
0,0,21,25,3,4,2,0,22,25,3,8,4,0,23,25,3,10,5,0,24,21,1,0,0,0,24,22,1,0,0,
0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,3,6,3,0,27,30,5,18,0,0,28,29,5,4,0,0,
29,31,3,10,5,0,30,28,1,0,0,0,30,31,1,0,0,0,31,32,1,0,0,0,32,33,5,6,0,0,33,
5,1,0,0,0,34,35,7,0,0,0,35,7,1,0,0,0,36,37,5,18,0,0,37,38,5,4,0,0,38,39,
3,10,5,0,39,40,5,6,0,0,40,9,1,0,0,0,41,42,6,5,-1,0,42,43,5,7,0,0,43,44,3,
10,5,0,44,45,5,8,0,0,45,49,1,0,0,0,46,49,5,18,0,0,47,49,5,17,0,0,48,41,1,
0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,60,1,0,0,0,50,51,10,5,0,0,51,52,3,12,
6,0,52,53,3,10,5,6,53,59,1,0,0,0,54,55,10,4,0,0,55,56,3,14,7,0,56,57,3,10,
5,5,57,59,1,0,0,0,58,50,1,0,0,0,58,54,1,0,0,0,59,62,1,0,0,0,60,58,1,0,0,
0,60,61,1,0,0,0,61,11,1,0,0,0,62,60,1,0,0,0,63,64,7,1,0,0,64,13,1,0,0,0,
65,66,7,2,0,0,66,15,1,0,0,0,6,19,24,30,48,58,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Ejercicio5Parser extends antlr4.Parser {

    static grammarFileName = "Ejercicio5.g4";
    static literalNames = [ null, "'and'", "'or'", "'not'", "'='", "','", 
                            "';'", "'('", "')'", "'{'", "'}'", "'let'", 
                            "'var'", "'*'", "'/'", "'+'", "'-'" ];
    static symbolicNames = [ null, "AND", "OR", "NOT", "EQ", "COMMA", "SEMI", 
                             "LPAREN", "RPAREN", "LCURLY", "RCURLY", "LET", 
                             "VAR", "MULT", "DIV", "SUM", "REST", "INT", 
                             "ID", "WS" ];
    static ruleNames = [ "program", "stat", "decl", "declaracion", "assign", 
                         "expr", "md", "sr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Ejercicio5Parser.ruleNames;
        this.literalNames = Ejercicio5Parser.literalNames;
        this.symbolicNames = Ejercicio5Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Ejercicio5Parser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.stat();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 399488) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Ejercicio5Parser.RULE_stat);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.decl();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.expr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decl() {
	    let localctx = new DeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Ejercicio5Parser.RULE_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.declaracion();
	        this.state = 27;
	        this.match(Ejercicio5Parser.ID);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 28;
	            this.match(Ejercicio5Parser.EQ);
	            this.state = 29;
	            this.expr(0);
	        }

	        this.state = 32;
	        this.match(Ejercicio5Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Ejercicio5Parser.RULE_declaracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Ejercicio5Parser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(Ejercicio5Parser.ID);
	        this.state = 37;
	        this.match(Ejercicio5Parser.EQ);
	        this.state = 38;
	        this.expr(0);
	        this.state = 39;
	        this.match(Ejercicio5Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, Ejercicio5Parser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 42;
	            this.match(Ejercicio5Parser.LPAREN);
	            this.state = 43;
	            this.expr(0);
	            this.state = 44;
	            this.match(Ejercicio5Parser.RPAREN);
	            break;
	        case 18:
	            this.state = 46;
	            this.match(Ejercicio5Parser.ID);
	            break;
	        case 17:
	            this.state = 47;
	            this.match(Ejercicio5Parser.INT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 58;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Ejercicio5Parser.RULE_expr);
	                    this.state = 50;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 51;
	                    this.md();
	                    this.state = 52;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, Ejercicio5Parser.RULE_expr);
	                    this.state = 54;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 55;
	                    this.sr();
	                    this.state = 56;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 62;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	md() {
	    let localctx = new MdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Ejercicio5Parser.RULE_md);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        _la = this._input.LA(1);
	        if(!(_la===13 || _la===14)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sr() {
	    let localctx = new SrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Ejercicio5Parser.RULE_sr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

Ejercicio5Parser.EOF = antlr4.Token.EOF;
Ejercicio5Parser.AND = 1;
Ejercicio5Parser.OR = 2;
Ejercicio5Parser.NOT = 3;
Ejercicio5Parser.EQ = 4;
Ejercicio5Parser.COMMA = 5;
Ejercicio5Parser.SEMI = 6;
Ejercicio5Parser.LPAREN = 7;
Ejercicio5Parser.RPAREN = 8;
Ejercicio5Parser.LCURLY = 9;
Ejercicio5Parser.RCURLY = 10;
Ejercicio5Parser.LET = 11;
Ejercicio5Parser.VAR = 12;
Ejercicio5Parser.MULT = 13;
Ejercicio5Parser.DIV = 14;
Ejercicio5Parser.SUM = 15;
Ejercicio5Parser.REST = 16;
Ejercicio5Parser.INT = 17;
Ejercicio5Parser.ID = 18;
Ejercicio5Parser.WS = 19;

Ejercicio5Parser.RULE_program = 0;
Ejercicio5Parser.RULE_stat = 1;
Ejercicio5Parser.RULE_decl = 2;
Ejercicio5Parser.RULE_declaracion = 3;
Ejercicio5Parser.RULE_assign = 4;
Ejercicio5Parser.RULE_expr = 5;
Ejercicio5Parser.RULE_md = 6;
Ejercicio5Parser.RULE_sr = 7;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_program;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_stat;
    }

	decl() {
	    return this.getTypedRuleContext(DeclContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_decl;
    }

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	ID() {
	    return this.getToken(Ejercicio5Parser.ID, 0);
	};

	SEMI() {
	    return this.getToken(Ejercicio5Parser.SEMI, 0);
	};

	EQ() {
	    return this.getToken(Ejercicio5Parser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_declaracion;
    }

	LET() {
	    return this.getToken(Ejercicio5Parser.LET, 0);
	};

	VAR() {
	    return this.getToken(Ejercicio5Parser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_assign;
    }

	ID() {
	    return this.getToken(Ejercicio5Parser.ID, 0);
	};

	EQ() {
	    return this.getToken(Ejercicio5Parser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(Ejercicio5Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_expr;
    }

	LPAREN() {
	    return this.getToken(Ejercicio5Parser.LPAREN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(Ejercicio5Parser.RPAREN, 0);
	};

	ID() {
	    return this.getToken(Ejercicio5Parser.ID, 0);
	};

	INT() {
	    return this.getToken(Ejercicio5Parser.INT, 0);
	};

	md() {
	    return this.getTypedRuleContext(MdContext,0);
	};

	sr() {
	    return this.getTypedRuleContext(SrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_md;
    }

	MULT() {
	    return this.getToken(Ejercicio5Parser.MULT, 0);
	};

	DIV() {
	    return this.getToken(Ejercicio5Parser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterMd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitMd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitMd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Ejercicio5Parser.RULE_sr;
    }

	SUM() {
	    return this.getToken(Ejercicio5Parser.SUM, 0);
	};

	REST() {
	    return this.getToken(Ejercicio5Parser.REST, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.enterSr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Ejercicio5Listener ) {
	        listener.exitSr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Ejercicio5Visitor ) {
	        return visitor.visitSr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




Ejercicio5Parser.ProgramContext = ProgramContext; 
Ejercicio5Parser.StatContext = StatContext; 
Ejercicio5Parser.DeclContext = DeclContext; 
Ejercicio5Parser.DeclaracionContext = DeclaracionContext; 
Ejercicio5Parser.AssignContext = AssignContext; 
Ejercicio5Parser.ExprContext = ExprContext; 
Ejercicio5Parser.MdContext = MdContext; 
Ejercicio5Parser.SrContext = SrContext; 
