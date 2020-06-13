from django import forms
from .models import Inquiry

class InquiryForm(forms.ModelForm):
    class Meta:
        model=Inquiry
        fields=['your_name','your_email','subject','your_message']