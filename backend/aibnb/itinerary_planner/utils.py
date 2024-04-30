import google.generativeai as genai
import json
genai.configure(api_key="AIzaSyD5AajTMhR6PYlK3yvNScZhfytGQBNBv1I")

# Set up the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 0,
  "max_output_tokens": 8192,
  "stop_sequences": [
    "~",
  ],
  "response_mime_type": "application/json",
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

system_instruction = "Generate Itinerary using the given inputs in the following format. Increase/Decrease the number of days in itinerary depending on the input. Do not include escape sequences or new lines: {Title: Duration days tour to Destination, Days:[ {Day: 1, Events: [{Time Stamp:, Activity:, Travel Details:}, {Time Stamp:, Activity:, Travel Detail:}], Food Recommendation:, Accommodation Recommendation:}, {Day: 2, Events:[{Time Stamp:, Activity:,  Travel Details:}, {Time Stamp:, Activity:, Travel Detail:}], Food Recommendation:, Accommodation Recommendation:}, {Day: 3, Events: [{Time Stamp:, Activity:, Travel Details:}, {Time Stamp:, Activity:, Travel Detail:}], Food Recommendation:}]}~"

model = genai.GenerativeModel(model_name="gemini-1.5-pro-latest",
                              generation_config=generation_config,
                              system_instruction=system_instruction,
                              safety_settings=safety_settings)


def generate_itinerary(destination, days, guests, budget, preferences):

    prompt = [f"destination: {destination}, days:{days}, number of guests: {guests}, budget: ${budget}, preferences: {preferences}"]

    itinerary_response = model.generate_content(prompt).text
    cleaned_string = itinerary_response.replace('\\', '').replace('\n', '')
    return cleaned_string
