// hack: make it javascript so its easier to load for now
pageData = 
{
	"note":"header kann auch gerne hardcoded sein; type ist in jedem Array der gleiche, der kann im Zweifel auch weggelassen werden",
	"header":[
		{"type":"button", "title":"Head left", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/fixHeadLeft"]}]},
		{"type":"button", "title":"Head right", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/fixHeadRight"]}]},
		{"type":"button", "title":"Head center", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/fixHead"]}]},
		{"type":"button", "title":"start BasicAwareness", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/reanableBasicAwareness"]}]}
	],
	"scenes":[
		{"type":"headline", "title":"2 RUR", "items":[
				{"type":"button", "title":"2.1 RUR cannot do", "actions":[
					{"service":"ALTabletService", "call":["showImage","red.png"]},
					{"service":"ALAnimatedSay", "call":["say","^start(rur_behaviors/path_1) I cannot do this ^wait(rur_behaviors/path_1)"]}
				]},
				{"type":"button", "title":"2.2 RUR cannot do", "actions":[
					{"service":"ALTabletService", "call":["showImage","red.png"]},
					{"service":"ALAnimatedSay", "call":["say","\\vct=200\\ Send me to the stamping mill"]}
				]}
			]
		},
		{"type":"headline", "title":"3 Rehearsal", "items":[
				{"type":"button", "title":"3.1 Rehearsal don't feel", "actions":[
					{"service":"ALTabletService", "call":["showImage","blue.png"]},
					{"service":"ALAnimatedSay", "call":["say","I don't feel this"]}
				]}
			]
		},
		{"type":"headline", "title":"4 Call From Future", "items":[
				{"type":"button", "title":"4.1 Call video", "actions":[
					{"service":"ALBehaviorManager", "call":["runBehavior","theater_playvideo/CallFromFuture"]}
				]}
			]
		}
	]
}