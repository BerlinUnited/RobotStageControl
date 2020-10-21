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
		{"type":"headline", "title":"2 R.U.R.", "items":[
				{"type":"button", "title":"2.1 R.U.R. Screen black", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]}
				]},
				{"type":"button", "title":"2.2 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say"," \\vct=60\\ \\rspd=90\\ Send me to the stamping mill!"]}
				]},
				{"type":"button", "title":"2.3 R.U.R. Path 2", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_behaviors/path_2)"]}
				]},
				{"type":"button", "title":"2.4 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=90\\ \\wait=6\\ I won't work for you.  Put me into the stamping mill!"]}
				]},
				{"type":"button", "title":"2.5 R.U.R. Path 3", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=90\\ \\wait=6\\ ^start(rur_behaviors/path_3) You are not as strong as the Robots.  You are not as skillful as the Robots. The Robots can do everything. You only give orders. You do nothing but talk.\n^wait(rur_behaviors/path_3)"]}
				]},
				{"type":"button", "title":"2.6 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=85\\ \\wait=6\\ I don't want any master. I know everything for myself."]}
				]},
				{"type":"button", "title":"2.7 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=85\\ \\wait=6\\ I don't want a master. I want to \\emph=2\\ be master. \\pau=250\\ I want to be master over others."]}
				]},
				{"type":"button", "title":"2.8 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=50\\ \\rspd=85\\  \\readmode=word\\ i want to be master over people."]}
				]},
				{"type":"button", "title":"2.9 R.U.R.", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\vct=60\\ \\rspd=85\\ Then send me to the stamping mill."]}
				]},
				{"type":"button", "title":"2.10 R.U.R. Path 4", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^start(rur_behaviors/path_4)\\rspd=100\\ \\vct=80\\ \\wait=6\\ What are you going to do? What are\nyou going to do?^wait(rur_behaviors/path_4)"]}
				]}
			]
		},
		{"type":"headline", "title":"3 Rehearsal", "items":[
				{"type":"button", "title":"3.1 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Disappointed_1)\n^run(rur_rehearsal/text_1)"]}
				]},
				{"type":"button", "title":"3.2 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_2)"]}
				]},
				{"type":"button", "title":"3.3 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_3)"]}
				]},
				{"type":"button", "title":"3.4 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_4)"]}
				]},
				{"type":"button", "title":"3.5 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_5)"]}
				]},
				{"type":"button", "title":"3.6 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_6)"]}
				]},
				{"type":"button", "title":"3.7 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Robot_1)\n^run(rur_rehearsal/text_7)"]}
				]},
				{"type":"button", "title":"3.8 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/AirGuitar_1)\n^run(rur_rehearsal/text_8)"]}
				]},
				{"type":"button", "title":"3.9 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Exhausted_1)\n^run(rur_rehearsal/text_9)"]}
				]},
				{"type":"button", "title":"3.10 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_10)"]}
				]},
				{"type":"button", "title":"3.11 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_11)"]}
				]},
				{"type":"button", "title":"3.12 Rehearsal", "actions":[
					{"service":"ALTabletService", "call":["showImage","white.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(rur_rehearsal/text_11)"]}
				]}
			]
		},
		{"type":"headline", "title":"4 Dance", "items":[
				{"type":"button", "title":"4 Dance", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
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
					{"service":"ALTabletService", "call":["showImage","purple.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Fear_2)"]}
				]},
				{"type":"button", "title":"5.3 Monologue Birdsounds", "actions":[
					{"service":"ALTabletService", "call":["showImage","purple.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/Helicopter_1)"]}
				]},
				{"type":"button", "title":"5.4 Monologue  I can do a lot", "actions":[
					{"service":"ALTabletService", "call":["showImage","green.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^start(animations/LED/CircleEyes)\n\\pau=10000\\\n^stop(animations/LED/CircleEyes)\n^run(animations/Stand/Reactions/SeeColor_1)"]}
				]},
				{"type":"button", "title":"5.5 Monologue The Chair", "actions":[
					{"service":"ALTabletService", "call":["showImage","light_blue.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=1000\\\n^run(animations/Stand/BodyTalk/Speaking/BodyTalk_3)\n\\pau=12000\\\n^run(animations/Stand/Waiting/ShowSky_1)\n\\pau=12000\\"]}
				]},
				{"type":"button", "title":"5.6 Monologue Placeholder", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]}
				]},
				{"type":"button", "title":"5.7 Monologue Clouds", "actions":[
					{"service":"ALTabletService", "call":["showImage","pink.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/MysticalPower_1)"]}
				]},
				{"type":"button", "title":"5.8 Monologue Clouds part 2", "actions":[
					{"service":"ALTabletService", "call":["showImage","green.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/PlayHands_2)\n\\pau=8000\\"]}
				]},
				{"type":"button", "title":"5.9 Monologue Speech", "actions":[
					{"service":"ALTabletService", "call":["showImage","light_green.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.10 Monologue Shoes", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/BowShort_1)"]}
				]},
				{"type":"button", "title":"5.11 Monologue Connecting to Stars", "actions":[
					{"service":"ALTabletService", "call":["showImage","lavender.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Waiting/ShowSky_1)\n^run(animations/Stand/Emotions/Positive/Ecstatic_1)\n^run(animations/Stand/Emotions/Positive/Enthusiastic_1)"]}
				]},
				{"type":"button", "title":"5.12 Monologue Astrology Talk", "actions":[
					{"service":"ALTabletService", "call":["showImage","lavender.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","\n^run(animations/Stand/BodyTalk/Speaking/BodyTalk_1)\n\\pau=12000\\"]}
				]},
				{"type":"button", "title":"5.13 Monologue Raise your hands", "actions":[
					{"service":"ALTabletService", "call":["showImage","light_orange.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/ShowSky_9)\n\\pau=1000\\"]}
				]},
				{"type":"button", "title":"5.14 Monologue Point", "actions":[
					{"service":"ALTabletService", "call":["showImage","orange.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Gestures/ComeOn_1)"]}
				]},
				{"type":"button", "title":"5.15 Monologue Color start with Music", "actions":[
					{"service":"ALTabletService", "call":["showImage","colors.gif"]}
				]},
				{"type":"button", "title":"5.16 Monologue Show Soul", "actions":[
					{"service":"ALTabletService", "call":["showImage","colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(Stand/Gestures/ShowTablet_1)\n^run(ht_animation_lib/show_left)\n^run(ht_animation_lib/show_right)"]}
				]},
				{"type":"button", "title":"5.17 Monologue Protect your Soul", "actions":[
					{"service":"ALTabletService", "call":["showImage","colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(animations/Stand/Emotions/Negative/Fear_2)\n^run(animations/Stand/Emotions/Negative/Anxious_1)"]}
				]},
				{"type":"button", "title":"5.18 Monologue Speech", "actions":[
					{"service":"ALTabletService", "call":["showImage","colors.gif"]},
					{"service":"ALAnimatedSpeech", "call":["say","\\pau=60000\\"]}
				]},
				{"type":"button", "title":"5.19 Monologue", "actions":[
					{"service":"ALTabletService", "call":["showImage","colors.gif"]},
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
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/collapse)"]}
				]},
				{"type":"button", "title":"7.2 Video Call from Future", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/CallFromFuture800)"]}
				]},
				{"type":"button", "title":"7.3 Video Call Awaken", "actions":[
					{"service":"ALTabletService", "call":["showImage","black.jpg"]},
					{"service":"ALAnimatedSpeech", "call":["say","^run(theater_playvideo/awake)\n^run(animations/Stand/Waiting/WakeUp_1)"]}
				]}
			]
		},
		{"type":"headline", "title":"8 Friendship Ritual", "items":[
				{"type":"button", "title":"8.1 Friendship Ritual", "actions":[
					{"service":"ALAnimatedSpeech", "call":["say","^run(ritual_friendship/behavior_1)"]}
				]}
			]
		}
	]
}