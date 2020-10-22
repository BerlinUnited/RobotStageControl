// hack: make it javascript so its easier to load for now
pageData = 
{
	"note":"header kann auch gerne hardcoded sein; type ist in jedem Array der gleiche, der kann im Zweifel auch weggelassen werden",
	"header":[
		{"type":"non-blocking", "title":"Head left", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/fixHeadLeft"]}]},
		{"type":"non-blocking", "title":"Head right", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/fixHeadRight"]}]},
		{"type":"non-blocking", "title":"Head center", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/fixHead"]}]},
		{"type":"non-blocking", "title":"start BasicAwareness", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/reanableBasicAwareness"]}]},
		{"type":"non-blocking", "title":"stop BasicAwareness", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/stopBasicAwareness"]}]},
		{"type":"non-blocking", "title":"Sound On", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/soundOn"]}]},
		{"type":"non-blocking", "title":"Sound Off", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","theaterhelpers/soundOff"]}]}
	],
	"scenes":[
		{"type":"headline", "title":"2 R.U.R.", "items":[
				{"type":"button", "title":"2.1 R.U.R. Screen black", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]}
				]},
				{"type":"button", "title":"2.2 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say"," \\vct=60\\ \\rspd=90\\ Send me to the stamping mill!"]}
				]},
				{"type":"button", "title":"2.3.1 R.U.R. Path 2", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_behaviors/path_2)"]}
				]},
				{"type":"button", "title":"2.3.2 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=90\\ \\wait=6\\ I won't work for you.  Put me into the stamping mill!"]}
				]},
				{"type":"button", "title":"2.5 R.U.R. Path 3", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=90\\ \\wait=6\\ ^start(rur_behaviors/path_3) You are not as strong as the Robots.  You are not as skillful as the Robots. The Robots can do everything. You only give orders. You do nothing but talk.\n^wait(rur_behaviors/path_3)"]}
				]},
				{"type":"button", "title":"2.6 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=85\\ \\wait=6\\ I don't want any master. I know everything for myself."]}
				]},
				{"type":"button", "title":"2.7 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=85\\ \\wait=6\\ I don't want a master. I want to \\emph=2\\ be master. \\pau=250\\ I want to be master over others."]}
				]},
				{"type":"button", "title":"2.8 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=50\\ \\rspd=85\\  \\readmode=word\\ i want to be master over people."]}
				]},
				{"type":"button", "title":"2.9 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=85\\ Then send me to the stamping mill."]}
				]},
				{"type":"button", "title":"2.10 R.U.R. Path 4", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^start(rur_behaviors/path_4)\\rspd=100\\ \\vct=80\\ \\wait=6\\ What are you going to do? What are\nyou going to do?^wait(rur_behaviors/path_4)"]}
				]}
			]
		},
		{"type":"headline", "title":"3 Rehearsal", "items":[
				{"type":"button", "title":"3.1 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Disappointed_1)\n^run(rur_rehearsal/text_1)"]}
				]},
				{"type":"button", "title":"3.2 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_2)"]}
				]},
				{"type":"button", "title":"3.3 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_3)"]}
				]},
				{"type":"button", "title":"3.4 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_4)"]}
				]},
				{"type":"button", "title":"3.5 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_5)"]}
				]},
				{"type":"button", "title":"3.6 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_6)"]}
				]},
				{"type":"button", "title":"3.7 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Robot_1)\n^run(rur_rehearsal/text_7)"]}
				]},
				{"type":"button", "title":"3.8 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/AirGuitar_1)\n^run(rur_rehearsal/text_8)"]}
				]},
				{"type":"button", "title":"3.9 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Exhausted_1)\n^run(rur_rehearsal/text_9)"]}
				]},
				{"type":"button", "title":"3.10 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_10)"]}
				]},
				{"type":"button", "title":"3.11 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_11)"]}
				]},
				{"type":"button", "title":"3.12 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_11)"]}
				]}
			]
		},
		{"type":"headline", "title":"4 Dance", "items":[
				{"type":"button", "title":"4.1 Dance Speaking Motion", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\wait=60000\\ "]}
				]},
				{"type":"button", "title":"4.2 Dance", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Bandmaster_1) ^run(animations/Stand/Gestures/Wings_3) ^run(animations/Stand/Reactions/SeeColor_3) ^run(animations/Stand/Waiting/MysticalPower_1) ^run(animations/Stand/Waiting/Relaxation_1)\n^run(theaterhelpers/Dance/arcadia_dance)\n^run(theaterhelpers/Dance/abbronza_dance)\n^run(animations/Stand/Waiting/ShowMuscles_3)\n^run(animations/Stand/Waiting/Bandmaster_1) ^run(animations/Stand/Waiting/MysticalPower_1)\n ^run(animations/Stand/Gestures/BowShort_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"5 Monologue", "items":[
				{"type":"button", "title":"5.1 Monologue Speech", "actions":[
					{"service":"ALTabletService", "call":["hide"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.2 Monologue Feel like you", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/purple.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Fear_2)"]}
				]},
				{"type":"button", "title":"5.3 Monologue Birdsounds", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/purple.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Helicopter_1)"]}
				]},
				{"type":"button", "title":"5.4 Monologue  I can do a lot", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/green.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^start(animations/LED/CircleEyes)\n\\pau=10000\\\n^stop(animations/LED/CircleEyes)\n^run(animations/Stand/Reactions/SeeColor_1)"]}
				]},
				{"type":"button", "title":"5.5 Monologue The Chair", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/light_blue.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=1000\\\n^run(animations/Stand/BodyTalk/Speaking/BodyTalk_3)\n\\pau=12000\\\n^run(animations/Stand/Waiting/ShowSky_1)\n\\pau=12000\\"]}
				]},
				{"type":"button", "title":"5.6 Monologue Placeholder", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]}
				]},
				{"type":"button", "title":"5.7 Monologue Clouds", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/pink.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/MysticalPower_1)"]}
				]},
				{"type":"button", "title":"5.8 Monologue Clouds part 2", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/green.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/PlayHands_2)\n\\pau=8000\\"]}
				]},
				{"type":"button", "title":"5.9 Monologue Speech", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/light_green.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.10 Monologue Shoes", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/BowShort_1)"]}
				]},
				{"type":"button", "title":"5.11 Monologue Connecting to Stars", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/lavender.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/ShowSky_1)\n^run(animations/Stand/Emotions/Positive/Ecstatic_1)\n^run(animations/Stand/Emotions/Positive/Enthusiastic_1)"]}
				]},
				{"type":"button", "title":"5.12 Monologue Astrology Talk", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/lavender.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\n^run(animations/Stand/BodyTalk/Speaking/BodyTalk_1)\n\\pau=12000\\"]}
				]},
				{"type":"button", "title":"5.13 Monologue Raise your hands", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/light_orange.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/ShowSky_9)\n\\pau=1000\\"]}
				]},
				{"type":"button", "title":"5.14 Monologue Point", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/orange.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/ComeOn_1)"]}
				]},
				{"type":"button", "title":"5.15 Monologue Color start with Music", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/colors.gif"]}
				]},
				{"type":"button", "title":"5.16 Monologue Show Soul", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(Stand/Gestures/ShowTablet_1)\n^run(ht_animation_lib/show_left)\n^run(ht_animation_lib/show_right)"]}
				]},
				{"type":"button", "title":"5.17 Monologue Protect your Soul", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Fear_2)\n^run(animations/Stand/Emotions/Negative/Anxious_1)"]}
				]},
				{"type":"button", "title":"5.18 Monologue Speech", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.19 Monologue", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/Wings_1) \n^run(theaterhelpers/Dance/ballet_dance)\n^run(animations/Stand/Waiting/Knight_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"6 Palm Reading", "items":[
				{"type":"button", "title":"6.1 Palm Reading", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(palm_reading_scene/behavior_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"7 Video Call", "items":[
				{"type":"button", "title":"7.1 Video Call Collapse", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/collapse)"]}
				]},
				{"type":"button", "title":"7.2 Video Call from Future", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/CallFromFuture800)"]}
				]},
				{"type":"button", "title":"7.3 Video Call Awaken", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/awake)\n^run(animations/Stand/Waiting/WakeUp_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"8 Friendship Ritual", "items":[
				{"type":"button", "title":"8.1 Friendship Ritual", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"9 Quiz", "items":[
				{"type":"button", "title":"9 A Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/Acorrect)"]}
				]},
				{"type":"button", "title":"9 B Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/Acorrect)"]}
				]},
				{"type":"button", "title":"9 C Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/Acorrect)"]}
				]},
				{"type":"button", "title":"9 D Correct", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/Acorrect)"]}
				]},
				{"type":"button", "title":"9 Picture D Correct", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/D.png"]}
				]}
			]
		},
		{"type":"headline", "title":"10 5th Element", "items":[
				{"type":"button", "title":"10.1 5th Element - LIGHT", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]},
				{"type":"button", "title":"10.2 5th Element - MYSTIC", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]},
				{"type":"button", "title":"10.3 5th Element - LOW5", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]},
				{"type":"button", "title":"10.4 5th Element - RITUAL", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_novoice/behavior_1)"]}
				]},
				{"type":"button", "title":"10.5 5th Element - Speaking Motion", "actions":[
					{"service":"ALTabletService", "call":["showImage","img/black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\wait=60000\\ "]}
				]}
			]
		},
		{"type":"headline", "title":"Animations", "items":[
				{"type":"blocking", "title":"knight", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Waiting/Knight_1"]}]},
				{"type":"blocking", "title":"led circle eyes", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/LED/CircleEyes"]}]},
				{"type":"blocking", "title":"Wings_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/Wings_1"]}]},
				{"type":"blocking", "title":"Wings_3", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/Wings_3"]}]},
				{"type":"blocking", "title":"MysticalPower_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Waiting/MysticalPower_1"]}]},
				{"type":"blocking", "title":"Relaxation_2", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Waiting/Relaxation_2"]}]},
				{"type":"blocking", "title":"ShowMuscles_3", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Waiting/ShowMuscles_3"]}]},
				{"type":"blocking", "title":"ShowSky_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Waiting/ShowSky_1"]}]},
				{"type":"blocking", "title":"Stretch_2", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Waiting/Stretch_2"]}]},
				{"type":"blocking", "title":"ShakeBody_2", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Reactions/ShakeBody_2"]}]},
				{"type":"blocking", "title":"SeeColor_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Reactions/SeeColor_1"]}]},
				{"type":"blocking", "title":"LightShine_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Reactions/LightShine_1"]}]},
				{"type":"blocking", "title":"WhatSThis_6", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/WhatSThis_6"]}]},
				{"type":"blocking", "title":"YouKnowWhat_4", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/YouKnowWhat_4"]}]},
				{"type":"blocking", "title":"YouKnowWhat_5", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/YouKnowWhat_5"]}]},
				{"type":"blocking", "title":"You_2", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/You_2"]}]},
				{"type":"blocking", "title":"EthernetOn_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Reactions/EthernetOn_1"]}]},
				{"type":"blocking", "title":"Hey_2", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/Hey_2"]}]},
				{"type":"blocking", "title":"Hey_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/Gestures/Hey_1"]}]},
				{"type":"blocking", "title":"ThinkingLoop_1", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/BodyTalk/Thinking/ThinkingLoop_1"]}]},
				{"type":"blocking", "title":"ThinkingLoop_2", "actions":[{"service":"ALBehaviorManager", "call":["startBehavior","animations/Stand/BodyTalk/Thinking/ThinkingLoop_2"]}]},
				{"type":"blocking", "title":"Speaking Motion", "actions":[{"service":"ALAnimatedSpeech", "call":["say","\\wait=60000\\ "]}]}
			]
		}
	]
}