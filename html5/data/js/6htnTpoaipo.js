window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":1920,"height":1080,"resume":true,"background":{"type":"swf","imagedata":{"assetId":183,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6htnTpoaipo","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6auHolO9d44.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6mkXxpn4TkB.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"6NnTCSEIJjn.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5g7p0UKBoG7.#ItemWasDragged","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.5fLPtENqMT9"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6F2T5gQHpmu","typea":"string","valueb":"_this.6auHolO9d44.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5gStde0DHuz","typea":"string","valueb":"_this.6mkXxpn4TkB.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6hueRmHXiZX","typea":"string","valueb":"_this.6NnTCSEIJjn.$DropTargetId","typeb":"property"}}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5xDDpv2pOqq","typea":"string","valueb":"_this.5g7p0UKBoG7.$DropTargetId","typeb":"property"}}}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6Rwr0f3kIss.InvalidPromptSlide"}}]}]},"ReviewInt_6rmMjyEtLmT":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6NnTCSEIJjn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5g7p0UKBoG7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6mkXxpn4TkB"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6auHolO9d44"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5fLPtENqMT9.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rmMjyEtLmT_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6rmMjyEtLmT_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6rmMjyEtLmT","typea":"var","valueb":"5bYuRuftvmw","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5bYuRuftvmw.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6rmMjyEtLmT"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5bYuRuftvmw.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6rmMjyEtLmT"}]}]}]},"ReviewIntCorrectIncorrect_6rmMjyEtLmT":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6NnTCSEIJjn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5g7p0UKBoG7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6mkXxpn4TkB"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6auHolO9d44"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6rmMjyEtLmT":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6rmMjyEtLmT"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6rmMjyEtLmT":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6NnTCSEIJjn"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5g7p0UKBoG7"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6mkXxpn4TkB"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6auHolO9d44"},"enabled":{"type":"boolean","value":false}}]},"6rmMjyEtLmT_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5fLPtENqMT9.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5bYuRuftvmw.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6rmMjyEtLmT"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5fLPtENqMT9.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5fLPtENqMT9.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6rmMjyEtLmT"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6htnTpoaipo":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6JiOELUdqOr"}}]},"NavigationRestrictionPreviousSlide_6htnTpoaipo":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Rwr0f3kIss","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6Rwr0f3kIss","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6rmMjyEtLmT","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6rmMjyEtLmT"}],"elseActions":[{"kind":"exe_actiongroup","id":"6rmMjyEtLmT_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6rmMjyEtLmT","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6rmMjyEtLmT","typea":"var","valueb":"5bYuRuftvmw","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5bYuRuftvmw"},"completed_slide_ref":{"type":"string","value":"_player.5vufAissHCN.5Xpc9azKZKf"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6rmMjyEtLmT","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6rmMjyEtLmT","typea":"var","valueb":"5bYuRuftvmw","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5bYuRuftvmw"},"completed_slide_ref":{"type":"string","value":"_player.5vufAissHCN.5Xpc9azKZKf"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6htnTpoaipo"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6htnTpoaipo"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":188,"id":"6RBr2KZ74mQ"},{"kind":"audio","assetId":189,"id":"5uKs8LGGzuJ"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cFWoUcIuNx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Vt6tYtB2dR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6auHolO9d44"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6mkXxpn4TkB"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NnTCSEIJjn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5g7p0UKBoG7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6F2T5gQHpmu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5gStde0DHuz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hueRmHXiZX"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xDDpv2pOqq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CLb9dmIhFL"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"62HIO1zpeV7"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":96,"yPos":268,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":424,"rotateYPos":188,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":848,"bottom":376,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":176}},"html5data":{"xPos":0,"yPos":0,"width":848,"height":376,"strokewidth":0}},"width":848,"height":376,"resume":true,"useHandCursor":true,"id":"6cFWoUcIuNx"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":1000,"yPos":268,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":424,"rotateYPos":188,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":848,"bottom":376,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":176}},"html5data":{"xPos":0,"yPos":0,"width":848,"height":376,"strokewidth":0}},"width":848,"height":376,"resume":true,"useHandCursor":true,"id":"5Vt6tYtB2dR"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":184,"id":"01","url":"story_content/6a38KO99uOc_80_P_88_144_896_776_DX912_DY912.swf","type":"normal","altText":"17.png","width":896,"height":776,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":928,"yPos":716,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":189.5,"rotateYPos":164,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":189,"snapy":164,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":379,"bottom":328,"altText":"17.png","pngfb":false,"pr":{"l":"Lib","i":177}},"html5data":{"xPos":0,"yPos":0,"width":379,"height":328,"strokewidth":0}},"width":379,"height":328,"resume":true,"useHandCursor":true,"id":"6auHolO9d44","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":185,"id":"01","url":"story_content/6hV4DE5ssRS_80_P_164_164_760_720_DX1056_DY1056.swf","type":"normal","altText":"20.png","width":760,"height":720,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":512,"yPos":692,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":186,"rotateYPos":176,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":185,"snapy":176,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":372,"bottom":352,"altText":"20.png","pngfb":false,"pr":{"l":"Lib","i":178}},"html5data":{"xPos":0,"yPos":0,"width":372,"height":352,"strokewidth":0}},"width":372,"height":352,"resume":true,"useHandCursor":true,"id":"6mkXxpn4TkB","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":186,"id":"01","url":"story_content/5Z7St3JnVl2_80_P_204_156_720_728_DX1210_DY1210.swf","type":"normal","altText":"21.png","width":720,"height":728,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1392,"yPos":620,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":202,"rotateYPos":204,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":201,"snapy":204,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":404,"bottom":408,"altText":"21.png","pngfb":false,"pr":{"l":"Lib","i":179}},"html5data":{"xPos":0,"yPos":0,"width":404,"height":408,"strokewidth":0}},"width":404,"height":408,"resume":true,"useHandCursor":true,"id":"6NnTCSEIJjn","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":187,"id":"01","url":"story_content/63BLeC3SPKU_80_P_254_225_648_624_DX1440_DY1440.swf","type":"normal","altText":"23.png","width":648,"height":624,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":104,"yPos":660,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":208,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":216,"snapy":208,"dragreturn":false,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":432,"bottom":416,"altText":"23.png","pngfb":false,"pr":{"l":"Lib","i":180}},"html5data":{"xPos":0,"yPos":0,"width":432,"height":416,"strokewidth":0}},"width":432,"height":416,"resume":true,"useHandCursor":true,"id":"5g7p0UKBoG7","variables":[{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"events":[{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":96,"yPos":268,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":204,"rotateYPos":188,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":204,"snapy":188,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":408,"bottom":376,"altText":"Rectangle 3","pngfb":false,"pr":{"l":"Lib","i":181}},"html5data":{"xPos":0,"yPos":0,"width":408,"height":376,"strokewidth":0}},"width":408,"height":376,"resume":true,"useHandCursor":true,"id":"6F2T5gQHpmu"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":536,"yPos":268,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":204,"rotateYPos":188,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":204,"snapy":188,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":408,"bottom":376,"altText":"Rectangle 4","pngfb":false,"pr":{"l":"Lib","i":181}},"html5data":{"xPos":0,"yPos":0,"width":408,"height":376,"strokewidth":0}},"width":408,"height":376,"resume":true,"useHandCursor":true,"id":"5gStde0DHuz"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":1000,"yPos":268,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":204,"rotateYPos":188,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":204,"snapy":188,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":408,"bottom":376,"altText":"Rectangle 5","pngfb":false,"pr":{"l":"Lib","i":181}},"html5data":{"xPos":0,"yPos":0,"width":408,"height":376,"strokewidth":0}},"width":408,"height":376,"resume":true,"useHandCursor":true,"id":"6hueRmHXiZX"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":1440,"yPos":268,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":204,"rotateYPos":188,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":204,"snapy":188,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6rmMjyEtLmT"],"dragoverids":["_drop_6rmMjyEtLmT"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":408,"bottom":376,"altText":"Rectangle 6","pngfb":false,"pr":{"l":"Lib","i":181}},"html5data":{"xPos":0,"yPos":0,"width":408,"height":376,"strokewidth":0}},"width":408,"height":376,"resume":true,"useHandCursor":true,"id":"5xDDpv2pOqq"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":54,"id":"01","url":"story_content/6OehJXO9tBn_80_P_316_324_456_432_DX660_DY660.swf","type":"normal","altText":"2.png","width":456,"height":432,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":55,"id":"02","url":"story_content/6OehJXO9tBn_80_P_316_324_456_432_DX660_DY660.swf","type":"normal","altText":"2.png","width":456,"height":432,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1784,"yPos":940,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":59,"rotateYPos":56,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":118,"bottom":112,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":44}},"html5data":{"xPos":0,"yPos":0,"width":118,"height":112,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":0,"right":118,"bottom":112,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":44}},"html5data":{"xPos":0,"yPos":0,"width":118,"height":112,"strokewidth":0}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-13,"top":-12,"right":119,"bottom":112,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-13,"yPos":-12,"width":132,"height":124,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-13,"top":-12,"right":119,"bottom":112,"altText":"2.png","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":-13,"yPos":-12,"width":132,"height":124,"strokewidth":0}}}],"width":118,"height":112,"resume":true,"useHandCursor":true,"id":"6CLb9dmIhFL","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6RBr2KZ74mQ"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6RBr2KZ74mQ"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6RBr2KZ74mQ"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6RBr2KZ74mQ"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6RBr2KZ74mQ"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5vufAissHCN.6ezR0V8xYq3"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":56,"id":"01","url":"story_content/6oO9lnUpB6B_80_P_320_296_440_472_DX640_DY640.swf","type":"normal","altText":"3.png","width":440,"height":472,"mobiledx":0,"mobiledy":0},{"kind":"imagedata","assetId":57,"id":"02","url":"story_content/6oO9lnUpB6B_80_P_320_296_440_472_DX640_DY640.swf","type":"normal","altText":"3.png","width":440,"height":472,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":32,"yPos":932,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56,"rotateYPos":60,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":112,"bottom":120,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":0,"yPos":0,"width":112,"height":120,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":0,"right":112,"bottom":120,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":0,"yPos":0,"width":112,"height":120,"strokewidth":0}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-12,"right":123,"bottom":120,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":0,"yPos":-12,"width":123,"height":132,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":0,"top":-12,"right":123,"bottom":120,"altText":"3.png","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":0,"yPos":-12,"width":123,"height":132,"strokewidth":0}}}],"width":112,"height":120,"resume":true,"useHandCursor":true,"id":"62HIO1zpeV7","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5uKs8LGGzuJ"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5uKs8LGGzuJ"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5uKs8LGGzuJ"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5uKs8LGGzuJ"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5uKs8LGGzuJ"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5vufAissHCN.6JiOELUdqOr"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6rmMjyEtLmT_CorrectReview","id":"01","linkId":"6rmMjyEtLmT_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1002,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":68}}}],"shapemaskId":"","xPos":0,"yPos":1040,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1920,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":67}},"html5data":{"xPos":1,"yPos":1,"width":1917,"height":37,"strokewidth":2}},"width":1920,"height":40,"resume":false,"useHandCursor":true,"id":"6rmMjyEtLmT_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6rmMjyEtLmT_IncorrectReview","id":"01","linkId":"6rmMjyEtLmT_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":1011,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":70}}}],"shapemaskId":"","xPos":0,"yPos":1040,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":960,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1920,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":69}},"html5data":{"xPos":1,"yPos":1,"width":1917,"height":37,"strokewidth":2}},"width":1920,"height":40,"resume":false,"useHandCursor":true,"id":"6rmMjyEtLmT_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');