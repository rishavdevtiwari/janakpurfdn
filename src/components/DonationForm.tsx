
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IndianRupee, DollarSign } from "lucide-react";

const DonationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [donationAmount, setDonationAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("usd");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
    anonymous: false,
    previousDonor: "",
    affiliation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    const currencySymbol = currency === "npr" ? "Rs." : "$";

    try {
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = 'https://formsubmit.co/janakpurfoundation01@gmail.com';
      formElement.style.display = 'none';

      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      };

      addField('Donation Amount', `${currencySymbol}${amount}`);
      addField('Currency', currency === "npr" ? "Nepali Rupees (NPR)" : "US Dollars (USD)");
      addField('Name', donorInfo.name);
      addField('Email', donorInfo.email);
      addField('Country', donorInfo.country);
      addField('Message', donorInfo.message);
      addField('Anonymous Donation', donorInfo.anonymous ? 'Yes' : 'No');
      addField('Previous Donor', donorInfo.previousDonor);
      addField('Affiliation', donorInfo.affiliation);
      addField('_captcha', 'false');
      addField('_template', 'table');
      addField('_subject', 'New Donation from Janakpur Foundation Website');
      addField('_next', window.location.href);

      document.body.appendChild(formElement);
      formElement.submit();

      setDonationAmount("");
      setCustomAmount("");
      setCurrency("usd");
      setDonorInfo({
        name: "",
        email: "",
        country: "",
        message: "",
        anonymous: false,
        previousDonor: "",
        affiliation: "",
      });

      toast({
        title: "Thank you for your donation!",
        description: "We have sent you a confirmation email with the bank transfer details.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error processing donation",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrencyOptions = () => {
    if (currency === "usd") {
      return (
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="25" id="amount-25" />
            <Label htmlFor="amount-25">$25</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50" id="amount-50" />
            <Label htmlFor="amount-50">$50</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100" id="amount-100" />
            <Label htmlFor="amount-100">$100</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="250" id="amount-250" />
            <Label htmlFor="amount-250">$250</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="amount-custom" />
            <Label htmlFor="amount-custom">Custom</Label>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1000" id="amount-1000" />
            <Label htmlFor="amount-1000">Rs.1,000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2500" id="amount-2500" />
            <Label htmlFor="amount-2500">Rs.2,500</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5000" id="amount-5000" />
            <Label htmlFor="amount-5000">Rs.5,000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10000" id="amount-10000" />
            <Label htmlFor="amount-10000">Rs.10,000</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="custom" id="amount-custom-npr" />
            <Label htmlFor="amount-custom-npr">Custom</Label>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="donate" className="py-20">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Donation Information</CardTitle>
              <CardDescription>
                Choose your donation amount and method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <div className="flex space-x-4">
                    <div 
                      className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border ${currency === "usd" ? "bg-foundation-purple text-white" : "bg-white"}`} 
                      onClick={() => {setDonationAmount(""); setCurrency("usd")}}
                    >
                      <DollarSign size={16} /> 
                      <span>USD</span>
                    </div>
                    <div 
                      className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full border ${currency === "npr" ? "bg-foundation-purple text-white" : "bg-white"}`}
                      onClick={() => {setDonationAmount(""); setCurrency("npr")}}
                    >
                      <IndianRupee size={16} /> 
                      <span>NPR</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Donation Amount</Label>
                  <RadioGroup
                    value={donationAmount}
                    onValueChange={setDonationAmount}
                    className="flex flex-wrap gap-4"
                  >
                    {getCurrencyOptions()}
                  </RadioGroup>

                  {donationAmount === "custom" && (
                    <div className="mt-2">
                      <Input
                        type="number"
                        placeholder={`Enter amount in ${currency === "usd" ? "USD" : "NPR"}`}
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        required={donationAmount === "custom"}
                        min="1"
                        className="max-w-xs"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={donorInfo.name}
                    onChange={(e) =>
                      setDonorInfo({ ...donorInfo, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={donorInfo.email}
                    onChange={(e) =>
                      setDonorInfo({ ...donorInfo, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={donorInfo.country}
                    onValueChange={(value) =>
                      setDonorInfo({ ...donorInfo, country: value })
                    }
                    required
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="np">Nepal</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="previousDonor">Have you donated before?</Label>
                  <Select
                    value={donorInfo.previousDonor}
                    onValueChange={(value) =>
                      setDonorInfo({ ...donorInfo, previousDonor: value })
                    }
                  >
                    <SelectTrigger id="previousDonor">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="affiliation">Affiliation with our organization</Label>
                  <Select
                    value={donorInfo.affiliation}
                    onValueChange={(value) =>
                      setDonorInfo({ ...donorInfo, affiliation: value })
                    }
                  >
                    <SelectTrigger id="affiliation">
                      <SelectValue placeholder="Select your affiliation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="partner">Partner Organization</SelectItem>
                      <SelectItem value="beneficiary">Program Beneficiary</SelectItem>
                      <SelectItem value="supporter">General Supporter</SelectItem>
                      <SelectItem value="none">No Affiliation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share why you're donating or any message you'd like to include"
                    value={donorInfo.message}
                    onChange={(e) =>
                      setDonorInfo({ ...donorInfo, message: e.target.value })
                    }
                    className="resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="anonymous"
                    checked={donorInfo.anonymous}
                    onCheckedChange={(checked) =>
                      setDonorInfo({
                        ...donorInfo,
                        anonymous: checked as boolean,
                      })
                    }
                  />
                  <Label htmlFor="anonymous">
                    Make my donation anonymous (only your name will be shared)
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="donation-button w-full"
                  disabled={isSubmitting || (!donationAmount || (donationAmount === "custom" && !customAmount))}
                >
                  {isSubmitting ? "Processing..." : "Submit Donation Form"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ... keep existing code for Bank Transfer Information card */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Bank Transfer Information</CardTitle>
              <CardDescription>
                Please use the following details to complete your donation via bank transfer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-lg space-y-3 border border-gray-200">
                <div className="text-lg font-semibold text-foundation-darkPurple mb-4">For National Transfers (within Nepal):</div>
                <div>
                  <span className="font-semibold">Bank Name:</span> Nabil Bank
                </div>
                <div>
                  <span className="font-semibold">Branch:</span> Janakpur Pidarichowk
                </div>
                <div>
                  <span className="font-semibold">Account Holder's Name:</span> Ranjana Jha
                </div>
                <div>
                  <span className="font-semibold">Account Number:</span> 05201017500751
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg space-y-3 border border-gray-200">
                <div className="text-lg font-semibold text-foundation-darkPurple mb-4">For International Transfers:</div>
                <div>
                  <span className="font-semibold">Bank Name:</span> Nabil Bank
                </div>
                <div>
                  <span className="font-semibold">Branch:</span> Janakpur Pidarichowk
                </div>
                <div>
                  <span className="font-semibold">Account Holder's Name:</span> Ranjana Jha
                </div>
                <div>
                  <span className="font-semibold">Account Number:</span> 05201017500751
                </div>
                <div>
                  <span className="font-semibold">SWIFT Code:</span> NARBNPKA
                </div>
                <div>
                  <span className="font-semibold">Bank Address:</span> Janakpur, Dhanusha District, Nepal
                </div>
              </div>

              <div className="text-sm text-gray-600 p-4 border-l-4 border-foundation-purple bg-foundation-purple/5">
                <p className="font-semibold mb-2">Important Notes:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Please include your name in the transfer reference.</li>
                  {/* <li>After making the transfer, you'll receive a confirmation email with receipt details.</li> */}
                  <li>International transfers may take 3-5 business days to process.</li>
                  <li>Bank transfer fees are the responsibility of the donor.</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <div className="text-foundation-darkPurple font-semibold mb-4 text-lg">
                  Our Location
                </div>
                <p className="mb-2">Janakpur Foundation</p>
                <p>Janakpur, Dhanusha District, Ward no.4, Nepal</p>
                <div className="mt-4 text-foundation-darkPurple font-semibold mb-2">
                  For assistance with your donation:
                </div>
                <p>Email: janakpurfoundation01@gmail.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationForm;
